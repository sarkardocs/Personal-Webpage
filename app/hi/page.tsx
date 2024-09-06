'use client';

import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import Link from '@/components/Link';
import { CSSProperties } from 'react';

export default function About() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
    document.head.appendChild(link);

    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href =
      'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap';
    document.head.appendChild(fontLink);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(fontLink);
    };
  }, []);

  return (
    <MainLayout>
      <div style={containerStyle}>
        <header style={headerStyle}>
          <h1 style={titleStyle}>Hi,</h1>
          <p style={subtitleStyle}>Exploring the art of code and design!</p>
        </header>
        <section style={sectionStyle}>
          <p style={textStyle}>"Creativity is intelligence having fun." - Albert Einstein</p>
          <p style={textStyle}>
            Dive into a world where technology meets creativity. Transforming ideas into stunning
            realities.
          </p>
        </section>
        <section style={sectionStyle}>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <a
                href="https://sarkardocs.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SarkarDocs"
                style={linkStyle}
              >
                Sarkardocs
              </a>
              ‎ - (Rest API for Devs)
            </li>
          </ul>
        </section>
        <div style={backLinkStyle}>
          <Link href="/docs">Navigate to docs</Link>
        </div>
      </div>
    </MainLayout>
  );
}

const containerStyle: CSSProperties = {
  padding: '20px',
  maxWidth: '800px',
  margin: 'auto',
  fontFamily: 'Poppins, sans-serif',
};

const headerStyle: CSSProperties = {
  textAlign: 'center',
  marginBottom: '30px',
};

const titleStyle: CSSProperties = {
  fontSize: '2.5rem',
  margin: '0 0 30px 0',
  fontWeight: '600',
  fontFamily: 'Poppins, sans-serif',
};

const subtitleStyle: CSSProperties = {
  fontSize: '1.5rem',
  marginBottom: '66px',
  fontWeight: '500',
  color: '#154c79',
  fontFamily: 'Poppins, sans-serif',
};

const sectionStyle: CSSProperties = {
  marginBottom: '50px',
  textAlign: 'center',
};

const textStyle: CSSProperties = {
  fontSize: '1.3rem',
  marginBottom: '50px',
  lineHeight: '1.5',
};

const listStyle: CSSProperties = {
  listStyleType: 'none',
  marginLeft: '7px',
  padding: 0,
};

const listItemStyle: CSSProperties = {
  marginBottom: '15px',
};

const linkStyle: CSSProperties = {
  fontSize: '1.3rem',
  color: '#154c79',
  textDecoration: 'underline',
};

const backLinkStyle: CSSProperties = {
  marginTop: '100px',
  textAlign: 'center',
  fontSize: '0.9rem',
};
