import React, { useState } from 'react';
import { DatePicker, DatePickerProps, Tabs } from 'antd';

import styles from './styles.module.scss';
import { Header } from './components/Header';
import { WeekPickerCommon } from '~/components/WeekPicker';
import { TableSchedule } from './components/TableSchedule';
import dayjs from 'dayjs';

const weekFormat = 'MM/DD';

export const JobSchedule = () => {
  const [openSetting, setOpenSetting] = useState(false);
  const [week, setWeek] = useState(dayjs(new Date()));

  const onChange = (key: string) => {
    console.log(key);
  };

  const handleOpenSetting = () => {
    setOpenSetting(true);
  };

  const handleCloseSetting = () => {
    setOpenSetting(false);
  };

  const customWeekStartEndFormat: DatePickerProps['format'] = (value) =>
    `${dayjs(value).startOf('week').format(weekFormat)} ~ ${dayjs(value)
      .endOf('week')
      .format(weekFormat)}`;

  return (
    <div>
      <Header onOpenSetting={handleOpenSetting} />
      <div className="mt-4 bg-white shadow rounded-xl">
        <div className="p-2">
          <WeekPickerCommon
            allowClear={false}
            value={week}
            format={customWeekStartEndFormat}
          />
        </div>

        <div className="p-2">
          <TableSchedule weeks={week} />
        </div>
      </div>
    </div>
  );
};
