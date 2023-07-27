import React, { Fragment } from 'react';
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Circle,
} from '@react-google-maps/api';
import { ENV_KEY } from '~/configs/envKey';
import { Skeleton } from 'antd';

const data = [
  {
    id: 1,
    name: 'Park Slope',
    latitude: '40.6710729',
    longitude: '-73.9988001',
    circle: {
      radius: 1000,
      options: {
        strokeColor: '#0b7b3b',
        fillColor: '#00ff6e',
        strokeWeight: 0.8,
      },
    },
  },
  {
    id: 2,
    name: 'Bushwick',
    latitude: '40.6942861',
    longitude: '-73.9389312',
    circle: {
      radius: 3000,
      options: {
        strokeColor: '#0b7b3b',
        fillColor: '#00ff6e',
        strokeWeight: 0.8,
      },
    },
  },
  {
    id: 3,
    name: 'East New York',
    latitude: '40.6577799',
    longitude: '-73.9147716',
    circle: {
      radius: 2000,
      options: {
        strokeColor: '#0b7b3b',
        fillColor: '#00ff6e',
        strokeWeight: 0.8,
      },
    },
  },
];

export const MapAirline = () => {
  // const { isLoaded } = useJsApiLoader({
  //   googleMapsApiKey: ENV_KEY.GOOGLE_MAP_API,
  // });

  // if (!isLoaded) {
  //   return <Skeleton active />;
  // }

  return (
    <GoogleMap
      center={{ lat: 40.6710729, lng: -73.9988001 }}
      zoom={12}
      mapContainerStyle={{ width: '100%', height: '100%' }}
    >
      {data.map((place) => {
        return (
          <Fragment key={place.id}>
            <Marker
              position={{
                lat: parseFloat(place.latitude),
                lng: parseFloat(place.longitude),
              }}
              options={{}}
            />
            {place.circle && (
              <Circle
                center={{
                  lat: parseFloat(place.latitude),
                  lng: parseFloat(place.longitude),
                }}
                radius={place.circle.radius}
                options={place.circle.options}
              />
            )}
          </Fragment>
        );
      })}
    </GoogleMap>
  );
};
