import React, { useState } from 'react';
import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'Blonix Retos',
    key: '',

  },
  {
    label: 'Inicio',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Retos',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Codigo',
        children: [
          { label: 'Desafio de codigo', key: 'setting:1' },
          { label: 'Encuentra el error', key: 'setting:2' },
        ],
      },
      {
        type: 'group',
        label: 'Varios',
        children: [
          { label: 'Descubre la palabra del dia', key: 'setting:3' },
          { label: 'Descubre el juego del dia', key: 'setting:4' },
        ],
      },
    ],
  },

];

const NavBar: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    // console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <>
      <div>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          style={{ width: '100%', backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}
        />
      </div>
    </>
  );
};

export default NavBar;
