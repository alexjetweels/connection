import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout as AntdLayout, Button } from 'antd';

import { Outlet as RouterOutlet } from 'react-router-dom';
import { SideNav } from './SideNav';
import { CommonSearchInput } from '../CommonSearchInput/CommonSearchInput';
import { HeaderAvatar } from './HeaderAvatar';

const { Header, Content } = AntdLayout;

export const Layout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

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
        <Content>
          <RouterOutlet />
        </Content>
      </AntdLayout>
    </AntdLayout>
  );
};
