import { Button, Result } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import path from '~/configs/path';

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={() => navigate(path.PUNCH_CLOCK)}>
          Back Home
        </Button>
      }
    />
  );
};
