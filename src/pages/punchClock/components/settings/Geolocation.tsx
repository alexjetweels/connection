import { Button, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import ImgClockInOut from '~/assets/img/geolocation-clock-in-out.webp';

import { MapAirline } from './Map';
import { ModalEditMap } from './ModalEditMap';
import { useJsApiLoader } from '@react-google-maps/api';
import { ENV_KEY } from '~/configs/envKey';

export const Geolocation = () => {
  const [openEditMap, setOpenEditMap] = useState(false);

  const handleOpenEditMap = () => {
    setOpenEditMap(true);
  };

  const handleCloseEditMap = () => {
    setOpenEditMap(false);
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: ENV_KEY.GOOGLE_MAP_API,
    libraries: ['places'],
  });

  if (!isLoaded) return <Skeleton />;

  return (
    <>
      <ModalEditMap open={openEditMap} onCancel={handleCloseEditMap} />

      <div className="flex justify-center">
        <div className="w-[1000px]">
          <div className="flex items-center justify-center gap-10 bg-blue-100 rounded-xl border border-solid border-blue-300 p-4">
            <div>
              <div className="text-2xl font-semibold">Clock in & out</div>
              <div>Track users' clock in and clock out locations</div>
            </div>

            <img src={ImgClockInOut} width={200} />
          </div>

          <div className="flex justify-between items-center mt-5">
            <div>
              <div className="text-xl font-semibold">Geo fence sites</div>
              <div>
                Ensure your users can clock in and out only when they’re
                physically in the work location.
              </div>
            </div>

            <Button
              onClick={handleOpenEditMap}
              className="border border-solid border-blue-300 rounded-2xl text-blue-500 "
            >
              Edit Sites
            </Button>
          </div>

          <div className="mt-2">
            <div className="w-full h-[450px]">
              <MapAirline />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
