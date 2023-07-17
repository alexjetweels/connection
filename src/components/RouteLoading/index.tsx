import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />;

export const RouteLoading: React.FC = () => (
  <div className="w-screen h-screen flex justify-center items-center">
    <Spin indicator={antIcon} />
  </div>
);
