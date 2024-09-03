'use client';

import MainLayout from '@/layouts/MainLayout';
import { CSSProperties } from 'react'; // Import CSSProperties for type safety

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
  flexDirection: 'column' as 'column', // Explicitly set the type
  alignItems: 'center',
  justifyContent: 'center',
  height: '70vh',
  textAlign: 'center',
  fontFamily: 'var(--font-medium)', // If you are using CSS variables, ensure they are defined
  margin: 0,
  padding: 0,
  overflow: 'hidden',
};

const welcomeTextStyle: CSSProperties = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: 'var(--text)', // Ensure the CSS variable is defined
  marginBottom: '1rem',
  fontFamily: 'var(--font-extrabold)', // Ensure the CSS variable is defined
};

const welcomeSubTextStyle: CSSProperties = {
  fontSize: '1.2rem',
  color: 'var(--text)', // Ensure the CSS variable is defined
  fontFamily: 'var(--font-medium)', // Ensure the CSS variable is defined
};

export default function Uses() {
  return (
    <MainLayout>
      <WelcomePage />
    </MainLayout>
  );
}
