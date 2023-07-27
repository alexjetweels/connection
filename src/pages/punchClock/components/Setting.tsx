import { Drawer, Tabs } from 'antd';
import React from 'react';

import {
  SettingOutlined,
  ToolOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  BorderOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';

import styles from '../styles.module.scss';
import { General } from './settings/General';
import { Customize } from './settings/Customize';
import { Geolocation } from './settings/Geolocation';

interface IProps {
  open: boolean;
  onClose: () => void;
}

export const Setting = ({ open, onClose }: IProps) => {
  const tabItems = [
    {
      label: (
        <div className="text-xs uppercase text-medium">
          <SettingOutlined /> General
        </div>
      ),
      key: 'general',
      children: <General />,
    },
    {
      label: (
        <div className="text-xs uppercase text-medium">
          <ToolOutlined /> Customize
        </div>
      ),
      key: 'customize',
      children: <Customize />,
    },
    {
      label: (
        <div className="text-xs uppercase text-medium">
          <CalendarOutlined /> Payroll
        </div>
      ),
      key: 'payroll',
      children: `Content of Tab general`,
    },
    {
      label: (
        <div className="text-xs uppercase text-medium">
          <ClockCircleOutlined /> Overtime
        </div>
      ),
      key: 'overtime',
      children: `Content of Tab general`,
    },
    {
      label: (
        <div className="text-xs uppercase text-medium">
          <BorderOutlined /> Breaks
        </div>
      ),
      key: 'break',
      children: `Content of Tab general`,
    },

    {
      label: (
        <div className="text-xs uppercase text-medium">
          <EnvironmentOutlined /> Geolocation
        </div>
      ),
      key: 'Geolocation',
      children: <Geolocation />,
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
        items={tabItems}
        className={styles.tabSetting}
      />
    </Drawer>
  );
};
