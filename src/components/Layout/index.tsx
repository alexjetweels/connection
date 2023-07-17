import { Avatar, Layout as AntdLayout, Menu, Popover } from 'antd';
import React from 'react';
import {
  Navigate,
  Outlet as RouterOutlet,
  useLocation,
} from 'react-router-dom';

import { ReactComponent as IcNitroLogo } from '~/assets/svg/logo.svg';
import { MenuNav } from './MenuNav';

const { Header, Content } = AntdLayout;

export const Layout: React.FC = () => {
  const prevLocation = useLocation();

  return (
    <AntdLayout>
      <Header className="px-5 background-white border-bottom-gray">
        <div className="flex items-center justify-between font-raleway">
          <div className="flex justify-center">
            <IcNitroLogo width={52} height={44} />
          </div>

          <MenuNav />

          <div className="flex items-center justify-end gap-6">
            {/* <Popover
              content={content}
              trigger={['click']}
              placement="bottomLeft"
            >
              <a onClick={(e) => e.preventDefault()}>
                <Avatar
                  size={40}
                  className="uppercase bg-[#FECBA1] text-[#CA6510]"
                >
                  {firstName.charAt(0)}
                </Avatar>
              </a>
            </Popover> */}
          </div>
        </div>
      </Header>
      <div className="h-[calc(100vh-64px)] bg-nitro-gray">
        <Content>
          <div>
            <RouterOutlet />
          </div>
        </Content>
      </div>
    </AntdLayout>
  );
};
