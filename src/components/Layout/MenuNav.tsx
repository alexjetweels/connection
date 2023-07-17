import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import { MenuKey } from '~/configs/enum';
import path from '~/configs/path';

import styles from './styles.module.scss';

const items: MenuProps['items'] = [
  // {
  //   label: (
  //     <a>
  //       <IcHome />
  //       <span>Billing Review</span>
  //     </a>
  //   ),
  //   key: MenuKey.BILLING,
  // },

  // {
  //   label: (
  //     <a>
  //       <IcHome />
  //       <span>Billing Review</span>
  //     </a>
  //   ),
  //   key: MenuKey.BILLING,
  // },
  {
    label: (
      <a>
        <span>Operations</span>
      </a>
    ),
    key: MenuKey.OPERATOR,
    children: [
      {
        type: 'group',
        children: [
          {
            label: <Link to={path.SCHEDULE}>SCHEDULE</Link>,
            key: MenuKey.SCHEDULE,
          },
          {
            label: <Link to={path.EDIT_MASTERSCHEDULE}>MASTER SCHEDULE</Link>,
            key: MenuKey.MASTER_SCHEDULE,
          },
          // {
          //   label: <Link to={path.TIME_SHEET}>TIMESHEET</Link>,
          //   key: MenuKey.TIME_SHEET,
          // },
        ],
      },
    ],
  },
  // {
  //   label: (
  //     <a>
  //       <IcDollar />
  //       <span>Finance</span>
  //     </a>
  //   ),
  //   key: MenuKey.FINANCE,
  //   children: [
  //     {
  //       type: 'group',
  //       children: [
  //         {
  //           label: <Link to={path.CLIENT_INFO}>CLIENTS</Link>,
  //           key: MenuKey.CLIENT_INFO,
  //         },
  //       ],
  //     },
  //   ],
  // },
];

export const MenuNav = () => {
  const location = useLocation();

  const [current, setCurrent] = useState<MenuKey>(MenuKey.FINANCE);

  const onClick: MenuProps['onClick'] = (e: any) => {
    setCurrent(e.key);
  };

  useEffect(() => {
    const pathName = location.pathname;

    if (pathName.startsWith(path.CLIENT_INFO)) {
      setCurrent(MenuKey.CLIENT_INFO);
    }

    if (pathName.startsWith(path.SCHEDULE)) {
      setCurrent(MenuKey.SCHEDULE);
    }

    if (pathName.startsWith(path.EDIT_MASTERSCHEDULE)) {
      setCurrent(MenuKey.MASTER_SCHEDULE);
    }

    if (pathName.startsWith(path.TIME_SHEET)) {
      setCurrent(MenuKey.TIME_SHEET);
    }
  }, []);

  return (
    <div className={styles.menuNav}>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" />
    </div>
  );
};
