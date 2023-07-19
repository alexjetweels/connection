import React from 'react';
import { TableClock } from './TableClock';
import { CommonSearchInput } from '~/components/CommonSearchInput/CommonSearchInput';
import { Button } from 'antd';
import { FunnelPlotOutlined } from '@ant-design/icons';

export const TabToday = () => {
  const handleFilter = () => {
    //
  };
  return (
    <div>
      <div className="flex justify-between items-center my-3 px-2">
        <Button
          type="ghost"
          className="border border-solid border-blue-200 text-blue-400 rounded-full mr-3 hover:bg-blue-100 hover:text-black/75"
          icon={<FunnelPlotOutlined />}
          onClick={handleFilter}
        >
          Filter
        </Button>
        <div className="w-[200px]">
          <CommonSearchInput />
        </div>
      </div>
      <TableClock />
    </div>
  );
};
