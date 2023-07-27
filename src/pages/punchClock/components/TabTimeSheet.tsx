import React from 'react';
import { TableTimeSheet } from './TableTimeSheet';
import { CommonSearchInput } from '~/components/CommonSearchInput/CommonSearchInput';
import { Button, Divider, DatePicker } from 'antd';
import { FunnelPlotOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import path from '~/configs/path';

export const TabTimeSheet = () => {
  const handleFilter = () => {
    //
  };

  return (
    <div>
      <div className="flex justify-between items-center my-3 px-2">
        <div className="flex">
          <Button
            type="ghost"
            className="border border-solid border-blue-200 text-blue-400 rounded-full mr-3 hover:bg-blue-100 hover:text-black/75"
            icon={<FunnelPlotOutlined />}
            onClick={handleFilter}
          >
            Filter
          </Button>

          <div>
            <DatePicker.RangePicker />
          </div>
        </div>

        <div className="flex gap-2">
          <div className="rounded-full bg-[#d7eaf9] p-2 pl-0 cursor-pointer">
            <span className="mr-3 rounded-full bg-blue-400 px-3 py-2 ml-1 text-white">
              1
            </span>
            Pending request
          </div>
          <div className="w-[200px]">
            <CommonSearchInput />
          </div>
        </div>
      </div>
      <Divider className="mt-0" />
      <div className="flex justify-between px-2 mb-2">
        <div className="flex gap-1">
          <div className="relative">
            <div className="bg-[#eaf5ff] px-4 py-1 rounded ">
              <div className="text-[#2998ff] font-bold text-center">428:14</div>
              <div className="text-[#2998ff] text-center">Regular</div>
            </div>
            <div className="absolute top-1/2 right-[-10px] z-40 transform -translate-y-1/2 text-blue-600 bg-white w-4 h-4 rounded-full flex justify-center items-center">
              +
            </div>
          </div>

          <div className="relative">
            <div className="bg-[#ebf9f4] px-4 py-1 rounded ">
              <div className="text-[#32bf90] font-bold text-center">00:00</div>
              <div className="text-[#32bf90] text-center">Overtime</div>
            </div>
            <div className="absolute top-1/2 right-[-10px] z-40 transform -translate-y-1/2 text-[#32bf90] bg-white w-4 h-4 rounded-full flex justify-center items-center">
              +
            </div>
          </div>

          <div className="relative">
            <div className="bg-[#feecec] px-4 py-1 rounded ">
              <div className="text-[#f23f3f] font-bold text-center">00:00</div>
              <div className="text-[#f23f3f] text-center">Paid time off</div>
            </div>
            <div className="absolute top-1/2 right-[-10px] transform -translate-y-1/2 text-[#f23f3f] bg-white w-4 h-4 rounded-full flex justify-center items-center">
              =
            </div>
          </div>
          <div>
            <div className="bg-[#2998ff] px-4 py-1 rounded ">
              <div className="text-white font-bold text-center">428:24</div>
              <div className="text-white text-center">Total Paid Hours</div>
            </div>
          </div>
        </div>

        <div className="bg-[#f6f2ef] px-4 py-1 rounded ">
          <div className="text-[#a2805e] font-bold text-center">00:00</div>
          <div className="text-[#a2805e] text-center">Unpaid time off</div>
        </div>
      </div>

      <TableTimeSheet />
    </div>
  );
};
