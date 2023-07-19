import { Drawer, Tabs } from 'antd';
import React from 'react';

import { SettingOutlined } from '@ant-design/icons';

interface IProps {
  open: boolean;
  onClose: () => void;
}

export const Setting = ({ open, onClose }: IProps) => {
  const tabItems = [
    {
      label: (
        <div className="text-base uppercase text-medium">
          <SettingOutlined /> General
        </div>
      ),
      key: 'general',
      children: `Content of Tab general`,
    },
  ];

  return (
    <Drawer
      title="Setting"
      placement={'bottom'}
      closable={true}
      onClose={onClose}
      height={'95vh'}
      open={open}
    >
      <Tabs
        tabPosition={'left'}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Tab ${id}`,
            key: id,
            children: `Content of Tab ${id}`,
          };
        })}
      />
    </Drawer>
  );
};
