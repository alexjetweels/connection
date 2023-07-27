import { Button, Checkbox, Divider, Form, Input, Modal, Slider } from 'antd';
import React, { useRef, useState } from 'react';

import {
  EnvironmentOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import { MapEditing } from './MapEditing';
import useOnclickOutside from 'react-cool-onclickoutside';

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';

enum MAP_STATUS {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  SELECTED = 'SELECTED',
}

export const colorStatus: any = {
  [MAP_STATUS.ACTIVE]: {
    strokeColor: '#0b7b3b',
    fillColor: '#00ff6e',
    strokeWeight: 0.8,
  },
  [MAP_STATUS.INACTIVE]: {
    strokeColor: '#000000',
    fillColor: '#aa252552',
    strokeWeight: 0.8,
  },
  [MAP_STATUS.SELECTED]: {
    strokeColor: '#0d1ebb',
    fillColor: '#135ab8',
    strokeWeight: 0.8,
  },
};

const MAP_DATA = [
  {
    name: 'JFK T1',
    address:
      'John F. Kennedy International Airport (JFK), 157 Central Terminal Area, Queens, Jamaica, NY 11430, USA',
    latitude: '40.6429525',
    longitude: '-73.7905846',
    status: MAP_STATUS.ACTIVE,
    radius: 1000,
  },
  {
    name: 'JFK T4',
    address: 'JFK Airport, Jamaica, Queens NY, Queens, NY 11430, USA',
    latitude: '40.7037439',
    longitude: '-73.7991953',
    status: MAP_STATUS.ACTIVE,
    radius: 1000,
  },
  {
    name: 'JFK T7',
    address: '1 Central Terminal Area, Queens, NY 11430, USA',
    latitude: '40.64167399999999',
    longitude: '-73.78790459999999',
    status: MAP_STATUS.SELECTED,
    radius: 1000,
  },
  {
    name: 'BLDG 151',
    address: '14 Jamaica, NY 11430, USA',
    latitude: '40.7037439',
    longitude: '-73.7991953',
    status: MAP_STATUS.INACTIVE,
    radius: 1000,
  },
];

interface IProps {
  open: boolean;
  onCancel: () => void;
}
export const ModalEditMap = ({ open, onCancel }: IProps) => {
  const [form] = Form.useForm();
  const [mapData, setMapData] = useState(MAP_DATA);
  const [editSite, setEditSite] = useState('');

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e: any) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }: any) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();

      // Get latitude and longitude via utility functions
      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);

        setMapData((mapData) => [
          ...mapData,
          {
            name: description,
            address: description,
            latitude: lat.toString(),
            longitude: lng.toString(),
            status: MAP_STATUS.ACTIVE,
            radius: 2000,
          },
        ]);
      });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  const handleChangeCheckBox = (e: any, address: string) => {
    setMapData((prev) =>
      prev.map((el) =>
        el.address === address
          ? {
              ...el,
              status: e.target.checked
                ? MAP_STATUS.ACTIVE
                : MAP_STATUS.INACTIVE,
            }
          : { ...el }
      )
    );
  };

  const handleCancelEdit = () => {
    setEditSite('');
  };

  return (
    <Modal
      width={'80%'}
      centered
      title={
        <div className="flex gap-1 text-2xl">
          <EnvironmentOutlined /> Geo fence sites editor
        </div>
      }
      open={open}
      onCancel={onCancel}
      footer={null}
    >
      <div className="grid grid-cols-[350px_auto] gap-4 h-[80vh]">
        <div className="mt-4">
          <div className="flex justify-between">
            <span className="font-semibold text-base">Sites (5)</span>

            <Button
              className="border border-solid border-blue-300 rounded-2xl text-blue-500 "
              icon={<PlusOutlined />}
            >
              Add sites
            </Button>
          </div>

          <Divider />

          {mapData.map((el) => (
            <div
              key={el.address}
              className="rounded border border-solid bg-slate-100 border-gray-300 p-2 mb-2"
            >
              {editSite === el.address ? (
                <div>
                  <Form form={form} layout="vertical">
                    <Form.Item name="name" label="Site name">
                      <Input />
                    </Form.Item>

                    <Form.Item name="address" label="Site address">
                      <div ref={ref}>
                        <Input
                          value={value}
                          onChange={handleInput}
                          disabled={!ready}
                          type="text"
                          suffix={<EnvironmentOutlined />}
                          className="rounded border border-solid border-gray-300 outline-none"
                        />

                        {status === 'OK' && <ul>{renderSuggestions()}</ul>}
                      </div>
                    </Form.Item>

                    <Form.Item name="fenceSize" label="Fence Site">
                      <Slider defaultValue={30} min={10} max={3000} />
                    </Form.Item>

                    <div className="flex justify-end gap-2 mt-4">
                      <Button className="border border-solid border-blue-300 rounded-2xl text-blue-500 ">
                        Save
                      </Button>
                      <Button
                        className="border border-solid border-black/25 rounded-2xl text-black"
                        onClick={handleCancelEdit}
                      >
                        Cancel
                      </Button>
                    </div>
                  </Form>
                </div>
              ) : (
                <div className="flex justify-between items-center">
                  <Checkbox
                    checked={el.status === MAP_STATUS.ACTIVE}
                    onChange={(e: any) => handleChangeCheckBox(e, el.address)}
                  >
                    <span className="font-bold">{el.name}</span>
                  </Checkbox>

                  <div className="flex gap-1">
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<EditOutlined />}
                      onClick={() => setEditSite(el.address)}
                    />
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<DeleteOutlined />}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div>
          <MapEditing data={mapData} />
        </div>
      </div>
    </Modal>
  );
};
