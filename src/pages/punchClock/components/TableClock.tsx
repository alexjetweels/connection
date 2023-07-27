import React, { useState } from 'react';
import { Avatar, Divider, Radio, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Nullable } from '~/types/nullable';
import { getRandomColor } from '~/utils';

interface DataType {
  key: React.Key;
  firstName: string;
  lastName: string;
  email: string;
  title: string;
  job: string;
  subJob: string;
  clockIn: string;
  clockOut: string;
  totalHour: string;
  regularHour: string;
  overtime?: Nullable<string>;
  paidTimeOff: Nullable<string>;
}

const data: DataType[] = [
  {
    key: '1',
    firstName: 'George',
    lastName: 'Harutyunyan',
    email: '',
    title: '',
    job: 'T1 Air France',
    subJob: 'Project1',
    clockIn: '09:00',
    clockOut: '16:00',
    totalHour: '07:00',
    regularHour: '07:00',
    overtime: null,
    paidTimeOff: null,
  },
  {
    key: '2',
    firstName: 'Trevor',
    lastName: 'Gaskin',
    email: '',
    title: '',
    job: 'T1 Air France',
    subJob: 'Project1',
    clockIn: '09:00',
    clockOut: '16:00',
    totalHour: '07:00',
    regularHour: '07:00',
    overtime: null,
    paidTimeOff: null,
  },
  {
    key: '3',
    firstName: 'YATRICE',
    lastName: 'FLEURIMOND',
    email: '',
    title: '',
    job: 'T1 Air France',
    subJob: 'Project1',
    clockIn: '09:00',
    clockOut: '16:00',
    totalHour: '07:00',
    regularHour: '07:00',
    overtime: null,
    paidTimeOff: null,
  },
  {
    key: '4',
    firstName: 'George',
    lastName: 'Harutyunyan',
    email: '',
    title: '',
    job: 'T1 Air France',
    subJob: 'Project1',
    clockIn: '09:00',
    clockOut: '16:00',
    totalHour: '07:00',
    regularHour: '07:00',
    overtime: null,
    paidTimeOff: null,
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows
    );
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.firstName === 'Disabled User', // Column configuration not to be checked
    name: record.firstName,
  }),
};

export const TableClock = () => {
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>(
    'checkbox'
  );

  const columns: ColumnsType<DataType> = [
    {
      title: 'First name',
      render: (text: string, record: DataType) => (
        <div>
          <Avatar
            style={{
              verticalAlign: 'middle',
              backgroundColor: getRandomColor(),
              marginRight: '10px',
            }}
            size="large"
          >
            {record.firstName[0]}
          </Avatar>

          {record?.firstName.toUpperCase()}
        </div>
      ),
    },
    {
      title: 'Last name',
      render: (text: string, record: DataType) => {
        return <span>{record?.lastName}</span>;
      },
    },
    {
      title: 'Email',
      render: (text: string, record: DataType) => {
        return <span>{record?.email ?? '--'}</span>;
      },
    },
    {
      title: 'Title',
      render: (text: string, record: DataType) => {
        return <span>{record?.title ?? '--'}</span>;
      },
    },
    {
      title: 'Job',
      render: (text: string, record: DataType) => {
        return (
          <span
            style={{ backgroundColor: getRandomColor() }}
            className="rounded-full p-2 text-white"
          >
            {record?.job}
          </span>
        );
      },
    },
    {
      title: 'Sub job',
      render: (text: string, record: DataType) => {
        return (
          <span
            style={{ backgroundColor: getRandomColor() }}
            className="rounded-full p-2 text-white"
          >
            {record?.subJob}
          </span>
        );
      },
    },
    {
      title: 'Clock in',
      render: (text: string, record: DataType) => {
        return <span>{record?.clockIn}</span>;
      },
    },
    {
      title: 'Clock Out',
      render: (text: string, record: DataType) => {
        return <span>{record?.clockOut}</span>;
      },
    },
    {
      title: 'Total hours',
      render: (text: string, record: DataType) => {
        return <span>{record?.totalHour}</span>;
      },
    },
    {
      title: 'Regular hours',
      render: (text: string, record: DataType) => {
        return <span>{record?.regularHour}</span>;
      },
    },
    {
      title: 'Overtime',
      render: (text: string, record: DataType) => {
        return <span>{record?.overtime}</span>;
      },
    },
    {
      title: 'Paid time off',
      render: (text: string, record: DataType) => {
        return <span>{record?.paidTimeOff}</span>;
      },
    },
  ];

  return (
    <div>
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
        scroll={{ x: 1300 }}
      />
    </div>
  );
};
