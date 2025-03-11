import React from 'react';
import { Input } from 'antd';

const Body: React.FC = () => {
    return (
        <>
            <div
                style={{
                    background: '#fff',
                    padding: 24,
                    minHeight: 'calc(100vh - 64px - 70px)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    fontSize: '24px',
                }}
            >
                <div>
                    <Input placeholder="" />
                </div>
                Bienvenido a blonixRetos
            </div>
        </>
    )
};

export default Body;