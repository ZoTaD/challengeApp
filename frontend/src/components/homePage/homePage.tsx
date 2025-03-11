import React from 'react';
import { Layout } from 'antd';
import NavBar from '../NavBar/navBar';
import Body from '../body/body';

const { Content, Footer } = Layout;

const HomePage: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh', width: '100%' }}>
      <NavBar />
      <Content style={{ padding: 5 }}>
        <Body />
      </Content>
      <Footer style={{ textAlign: 'center' }}>©2025 Mi Sitio Web</Footer>
    </Layout>
  );
};

export default HomePage;
