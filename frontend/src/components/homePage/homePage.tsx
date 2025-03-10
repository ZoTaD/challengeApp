import React from 'react';
import { Layout } from 'antd';
import NavBar from '../NavBar/navBar';

const { Content, Footer } = Layout;

const HomePage: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh', width: '100%' }}>
      <NavBar />
      <Content style={{ padding: 0 }}>
        <div
          style={{
            background: '#fff',
            padding: 24,
            minHeight: 'calc(100vh - 64px - 70px)'
          }}
        >
          Bienvenido a blonixRetos
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>©2025 Mi Sitio Web</Footer>
    </Layout>
  );
};

export default HomePage;
