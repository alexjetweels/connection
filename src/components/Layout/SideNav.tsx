import { Layout, Menu, type MenuProps } from 'antd';
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons';

import path from '~/configs/path';

import { ReactComponent as IcLogo } from '~/assets/svg/logo.svg';

import styles from './styles.module.scss';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const routes = [
  {
    icon: <ClockCircleOutlined />,
    path: path.PUNCH_CLOCK,
    label: 'Punch Clock',
  },
  {
    icon: <CalendarOutlined />,
    path: path.JOB_SCHEDULE,
    label: 'Job Schedule',
  },
];

interface IProps {
  collapsed: boolean;
}
export const SideNav = ({ collapsed }: IProps) => {
  const { pathname } = useLocation();
  const [selectedKey, setSelectedKey] = useState(path.JOB_SCHEDULE);

  useEffect(() => {
    routes.forEach((item) => {
      if (pathname.startsWith(item.path)) {
        setSelectedKey(item.path);
      }
    });
  }, [pathname]);

  const menuItem = (): any[] =>
    routes.map((route) => ({
      label: <NavLink to={route.path}>{route.label}</NavLink>,
      key: route.path,
      icon: route.icon,
    }));

  return (
    <Sider
      className={styles.sider}
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div className="flex justify-center mb-2">
        <IcLogo width={40} height={60} />
      </div>
      <Menu
        selectedKeys={[selectedKey]}
        mode="inline"
        theme="light"
        className={styles.menu}
        items={menuItem()}
      />
    </Sider>
  );
};
