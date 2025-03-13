import React, { useState } from 'react';
import { Layout } from 'antd';
import NavBar from '../NavBar/navBar';
import Body from '../body/body';
import PalabraDelDia from '../NavBar/PalabraDelDia/palabraDelDia';
import JuegoDelDia from '../NavBar/JuegoDelDia/juegoDelDia';

const { Content, Footer } = Layout;

const HomePage: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState('inicio');

  const renderContent = () => {
    switch (selectedPage) {
      case 'palabra_dia':
        return <PalabraDelDia />;
      case 'juego_dia':
        return <JuegoDelDia />;
      default:
        return <Body />;
    }
  }

  return (
    <Layout style={{ minHeight: '100vh', width: '100%' }}>
      <NavBar onSelect={setSelectedPage} />
      <Content style={{ padding: 5 }}>{renderContent()}</Content>
      <Footer style={{ textAlign: 'center' }}>©2025 Mi Sitio Web</Footer>
    </Layout>
  );
};

export default HomePage;
