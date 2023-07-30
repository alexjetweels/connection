import React from 'react';
import ImgSchedule from '~/assets/img/schedule_blue.png';
import { Avatar, Button, Divider, Tooltip } from 'antd';
import {
  SyncOutlined,
  AntDesignOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import path from '~/configs/path';

interface IProps {
  onOpenSetting: () => void;
}
export const Header = ({ onOpenSetting }: IProps) => {
  return (
    <div className="bg-white rounded-xl shadow flex items-center justify-between">
      <div className="flex gap-4 items-center">
        <div className="flex items-center">
          <img src={ImgSchedule} width={50} alt="punch-clock" />
          <span className="text-[24px] uppercase font-semibold">
            Job Schedule
          </span>
        </div>

        <div className="rounded-full bg-[#d7eaf9] p-2 pl-0 cursor-pointer">
          <span className="mr-3 rounded-full bg-blue-400 p-2">
            <SyncOutlined className="text-white" />
          </span>
          Synced with: <Link to={path.PUNCH_CLOCK}>Punch Clock</Link>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center">
          <div className="font-semibold">Admin</div>
          <Avatar.Group
            maxCount={2}
            maxPopoverTrigger="click"
            size="large"
            maxStyle={{
              color: '#f56a00',
              backgroundColor: '#fde3cf',
              cursor: 'pointer',
            }}
          >
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
            <Tooltip title="Ant User" placement="top">
              <Avatar
                style={{ backgroundColor: '#87d068' }}
                icon={<UserOutlined />}
              />
            </Tooltip>
            <Avatar
              style={{ backgroundColor: '#1677ff' }}
              icon={<AntDesignOutlined />}
            />
          </Avatar.Group>
        </div>

        <Divider type="vertical" />

        <Button
          type="ghost"
          className="border border-solid border-blue-200 text-blue-400 rounded-full mr-3 hover:bg-blue-100 hover:text-black/75"
          icon={<SettingOutlined />}
          onClick={onOpenSetting}
        >
          Settings
        </Button>
      </div>
    </div>
  );
};
