import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const NavBar: React.FC = () => {
  const menuItems = [
    { label: 'Inicio', key: '1' },
    { label: 'Desafios', key: '2' },
    { label: 'Contacto', key: '3' },
  ];

  return (
    <Header>
      <div className="logo" style={{ float: 'left', color: '#fff', fontSize: '18px', marginRight: '20px' }}>
        MiLogo
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={menuItems} />
    </Header>
  );
};

export default NavBar;
