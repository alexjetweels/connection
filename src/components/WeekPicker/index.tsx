import { DatePicker, DatePickerProps } from 'antd';
import React from 'react';

import styles from './styles.module.scss';

export const WeekPickerCommon = ({ ...props }: DatePickerProps) => {
  return (
    <DatePicker picker="week" {...props} popupClassName={styles.datePicker} />
  );
};
