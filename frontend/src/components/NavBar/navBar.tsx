import React, { useState } from 'react';
import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { label: 'Blonix Retos', key: 'home', },
  { label: 'Inicio', key: 'inicio', icon: <MailOutlined />, },
  {
    label: 'Retos',
    key: 'retos',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Codigo',
        children: [
          { label: 'Desafio de codigo', key: 'desafio_codigo' },
          { label: 'Encuentra el error', key: 'encuentra_error' },
        ],
      },
      {
        type: 'group',
        label: 'Varios',
        children: [
          { label: 'Descubre la palabra del dia', key: 'palabra_dia' },
          { label: 'Descubre el juego del dia', key: 'juego_dia' },
        ],
      },
    ],
  },
];

interface NavBarProps {
  onSelect: (key: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onSelect }) => {
  const [current, setCurrent] = useState('inicio');

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    onSelect(e.key);
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
