import { Typography } from 'antd';
import React, { ReactNode } from 'react';

const { Text } = Typography;

interface IProps {
  text?: string | ReactNode;
  width?: number;
}
export const TooltipText = ({ text, width = 100 }: IProps) => {
  return (
    <Text style={{ width }} ellipsis={{ tooltip: text }}>
      {text}
    </Text>
  );
};
