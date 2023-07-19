import React, { useState } from 'react';
import { Tabs } from 'antd';
import { TimeClockHeader } from './components/TimeClockHeader';

import { CalendarOutlined, FieldTimeOutlined } from '@ant-design/icons';
import { TabToday } from './components/TabToday';
import { TabTimeSheet } from './components/TabTimeSheet';
import styles from './styles.module.scss';
import { Setting } from './components/Setting';

export const PunchClock = () => {
  const [openSetting, setOpenSetting] = useState(false);
  const onChange = (key: string) => {
    console.log(key);
  };

  const handleOpenSetting = () => {
    setOpenSetting(true);
  };

  const handleCloseSetting = () => {
    setOpenSetting(false);
  };

  const itemsTabs = [
    {
      label: (
        <div className="text-[18px] uppercase text-medium">
          <CalendarOutlined /> Today
        </div>
      ),
      key: 'TODAY',
      children: <TabToday />,
    },
    {
      label: (
        <div className="text-[18px] uppercase text-medium">
          <FieldTimeOutlined /> Time sheet
        </div>
      ),
      key: 'TIME_SHEET',
      children: <TabTimeSheet />,
    },
  ];

  return (
    <div>
      <TimeClockHeader onOpenSetting={handleOpenSetting} />
      <Setting open={openSetting} onClose={handleCloseSetting} />

      <div className="mt-4 bg-white">
        <Tabs
          onChange={onChange}
          type="card"
          items={itemsTabs}
          className={styles.tab}
        />
      </div>
    </div>
  );
};
