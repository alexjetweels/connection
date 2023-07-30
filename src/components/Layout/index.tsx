import React, { useEffect, useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout as AntdLayout, Button } from 'antd';

import {
  Navigate,
  Outlet as RouterOutlet,
  useNavigate,
} from 'react-router-dom';
import { SideNav } from './SideNav';
import { CommonSearchInput } from '../CommonSearchInput/CommonSearchInput';
import { HeaderAvatar } from './HeaderAvatar';
import { useAuth } from '~/firebase/auth';
import path from '~/configs/path';

const { Header, Content } = AntdLayout;

export const Layout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { authUser, isLoading }: any = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !authUser) {
      navigate(path.LOG_IN);
    }
  }, [authUser, isLoading]);

  return (
    <AntdLayout>
      <SideNav collapsed={collapsed} />
      <AntdLayout className="h-[calc(100vh)] bg-white">
        <Header className="bg-white p-0 border-bottom-gray flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
            />
            <CommonSearchInput />
          </div>

          <HeaderAvatar />
        </Header>
        <Content className="p-4 bg-[#f6f6f6]">
          <RouterOutlet />
        </Content>
      </AntdLayout>
    </AntdLayout>
  );
};
