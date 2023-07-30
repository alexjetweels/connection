import React, { useMemo } from 'react';
import { Input, Table, Tooltip } from 'antd';

import styles from '../styles.module.scss';
import { Dayjs } from 'dayjs';
import { dateUtils } from '~/utils/dayjs';

import {
  ClockCircleOutlined,
  UserOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';

interface IProps {
  weeks: Dayjs;
}

export const TableSchedule = ({ weeks }: IProps) => {
  const weekDay = useMemo(() => dateUtils.weekArray(weeks), [weeks]);
  const dataSource = [
    {
      key: '1',
      name: 'Alex',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'Faizal',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns: ColumnsType<any> = [
    {
      title: (
        <div>
          <Input.Search />
        </div>
      ),
      dataIndex: 'name',
      key: 'name',
      width: 200,
      fixed: 'left',
    },
    {
      title: (
        <WeekDayTitle
          day={weekDay[0]}
          totalHours="36.6"
          totalShifts={5}
          totalUsers={4}
        />
      ),
    },
    {
      title: (
        <WeekDayTitle
          day={weekDay[1]}
          totalHours="36.6"
          totalShifts={5}
          totalUsers={4}
        />
      ),
    },
    {
      title: (
        <WeekDayTitle
          day={weekDay[2]}
          totalHours="36.6"
          totalShifts={5}
          totalUsers={4}
        />
      ),
    },
    {
      title: (
        <WeekDayTitle
          day={weekDay[3]}
          totalHours="36.6"
          totalShifts={5}
          totalUsers={4}
        />
      ),
    },
    {
      title: (
        <WeekDayTitle
          day={weekDay[4]}
          totalHours="36.6"
          totalShifts={5}
          totalUsers={4}
        />
      ),
    },
    {
      title: (
        <WeekDayTitle
          day={weekDay[5]}
          totalHours="36.6"
          totalShifts={5}
          totalUsers={4}
        />
      ),
    },
    {
      title: (
        <WeekDayTitle
          day={weekDay[6]}
          totalHours="36.6"
          totalShifts={5}
          totalUsers={4}
        />
      ),
    },
  ];

  return (
    <Table
      className={styles.tableSchedule}
      bordered
      dataSource={dataSource}
      columns={columns}
      scroll={{
        x: 1000,
      }}
    />
  );
};

interface IWeekDayTitle {
  day: string;
  totalHours?: string;
  totalUsers?: number;
  totalShifts?: number;
}
const WeekDayTitle = ({
  day,
  totalHours,
  totalShifts,
  totalUsers,
}: IWeekDayTitle) => {
  return (
    <div>
      <div className="text-center">{day}</div>
      <div className="flex gap-2 justify-between text-xs text-gray-400">
        <Tooltip placement="topLeft" title={'Total hours of one day'}>
          <ClockCircleOutlined /> <span className="ml-1">{totalHours}</span>
        </Tooltip>
        <Tooltip placement="topLeft" title={'Total users of one day'}>
          <UserOutlined />
          <span className="ml-1">{totalUsers}</span>
        </Tooltip>
        <Tooltip placement="topLeft" title={'Total shifts of one day'}>
          <CalendarOutlined />
          <span className="ml-1">{totalShifts}</span>
        </Tooltip>
      </div>
    </div>
  );
};
