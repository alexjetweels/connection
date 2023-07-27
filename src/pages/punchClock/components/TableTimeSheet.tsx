import React from 'react';
import { Avatar, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { getRandomColor } from '~/utils';

interface DataType {
  key: React.Key;
  firstName: string;
  totalHours: string;
  regularHours: string;
  overtime: string;
  paidTimeOff: string;
  totalPay: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
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
    title: 'Total hours',
    dataIndex: 'totalHours',
  },
  {
    title: 'Regular hours',
    dataIndex: 'regularHours',
  },
  {
    title: 'Overtime',
    dataIndex: 'overtime',
  },
  {
    title: 'Paid time off',
    dataIndex: 'paidTimeOff',
  },
  {
    title: 'Total pay',
    dataIndex: 'totalPay',
  },
];

const data: DataType[] = [
  {
    key: '1',
    firstName: 'YATRICE',
    totalHours: '--',
    regularHours: '--',
    overtime: '--',
    paidTimeOff: '--',
    totalPay: '--',
  },
  {
    key: '2',
    firstName: 'George',
    totalHours: '--',
    regularHours: '--',
    overtime: '--',
    paidTimeOff: '--',
    totalPay: '--',
  },
  {
    key: '3',
    firstName: 'Nazeer',
    totalHours: '--',
    regularHours: '--',
    overtime: '--',
    paidTimeOff: '--',
    totalPay: '--',
  },
  {
    key: '4',
    firstName: 'Roy',
    totalHours: '--',
    regularHours: '--',
    overtime: '--',
    paidTimeOff: '--',
    totalPay: '--',
  },
];

export const TableTimeSheet = () => {
  return (
    <div>
      <Table columns={columns} dataSource={data} scroll={{ x: 1000 }} />
    </div>
  );
};
