'use client';

import MainLayout from '@/layouts/MainLayout';
import { CSSProperties } from 'react';

function WelcomePage() {
  return (
    <div style={welcomePageStyle}>
      <h1 style={welcomeTextStyle}>HI</h1>
    </div>
  );
}

const welcomePageStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '70vh',
  textAlign: 'center',
  fontFamily: 'sans-serif',
  margin: 0,
  padding: 0,
  overflow: 'hidden',
};

const welcomeTextStyle: CSSProperties = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: 'black', // Direct color value to avoid issues with CSS variables
  marginBottom: '1rem',
  fontFamily: 'sans-serif',
};

export default function Uses() {
  return (
    <MainLayout>
      <WelcomePage />
    </MainLayout>
  );
}
