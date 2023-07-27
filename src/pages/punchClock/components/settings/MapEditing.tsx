import React, { Fragment } from 'react';
import { GoogleMap, Marker, Circle } from '@react-google-maps/api';
import { colorStatus } from './ModalEditMap';

interface IProps {
  data: any;
}
export const MapEditing = ({ data }: IProps) => {
  return (
    <GoogleMap
      center={{
        lat: parseFloat(data[0].latitude),
        lng: parseFloat(data[0].longitude),
      }}
      zoom={12}
      mapContainerStyle={{ width: '100%', height: '100%' }}
    >
      {data?.map((place: any) => {
        return (
          <Fragment key={place.address}>
            <Marker
              position={{
                lat: parseFloat(place.latitude),
                lng: parseFloat(place.longitude),
              }}
              options={{}}
            />

            <Circle
              center={{
                lat: parseFloat(place.latitude),
                lng: parseFloat(place.longitude),
              }}
              radius={place.radius}
              options={colorStatus[place.status]}
            />
          </Fragment>
        );
      })}
    </GoogleMap>
  );
};
