import { Button, Popover, Avatar } from 'antd';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { ReactComponent as IcBell } from '~/assets/svg/bell_notice.svg';
import { ReactComponent as IcSetting } from '~/assets/svg/setting.svg';
import path from '~/configs/path';

export const HeaderAvatar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate(`${path.LOG_IN}`, { replace: true });
  };

  const content = (
    <div className="px-1">
      <Button type="primary" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );

  return (
    <div className="flex gap-2 items-center">
      <IcBell />
      <IcSetting />

      <div className="flex items-center font-raleway mr-2">
        <Popover content={content} trigger={['click']} placement="bottomLeft">
          <a
            onClick={(e) => e.preventDefault()}
            className="flex gap-2 items-center"
          >
            <Avatar size={40} className="uppercase bg-slate-400">
              J
            </Avatar>
          </a>
        </Popover>
      </div>
    </div>
  );
};
