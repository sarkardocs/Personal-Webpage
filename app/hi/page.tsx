'use client';

import MainLayout from '@/layouts/MainLayout';
import { CSSProperties } from 'react';

function WelcomePage() {
  return (
    <div style={welcomePageStyle}>
      <h1 style={welcomeTextStyle}>hii</h1>
      <p style={welcomeSubTextStyle}>enjoy your stay!</p>
    </div>
  );
}

const welcomePageStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column', // 'column' is a valid value
  alignItems: 'center',
  justifyContent: 'center',
  height: '70vh',
  textAlign: 'center',
  fontFamily: 'var(--font-medium)', // Ensure CSS variables are defined
  margin: 0,
  padding: 0,
  overflow: 'hidden',
};

const welcomeTextStyle: CSSProperties = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: 'var(--text)', // Ensure CSS variables are defined
  marginBottom: '1rem',
  fontFamily: 'var(--font-extrabold)', // Ensure CSS variables are defined
};

const welcomeSubTextStyle: CSSProperties = {
  fontSize: '1.2rem',
  color: 'var(--text)', // Ensure CSS variables are defined
  fontFamily: 'var(--font-medium)', // Ensure CSS variables are defined
};

export default function Uses() {
  return (
    <MainLayout>
      <WelcomePage />
    </MainLayout>
  );
}
