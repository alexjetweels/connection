import { message, Select } from 'antd';
import { AxiosError } from 'axios';
import dayjs, { Dayjs } from 'dayjs';
import React from 'react';

export const getRandomColor = () =>
  '#' + Math.floor(Math.random() * 16777215).toString(16);
