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
          <h2 style={sectionTitleStyle}>Inspiration</h2>
          <p style={textStyle}>"Creativity is intelligence having fun." - Albert Einstein</p>
          <p style={textStyle}>
            Dive into a world where technology meets creativity. Transforming ideas into stunning
            realities, one pixel at a time.
          </p>
        </section>
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>✈️ Explore APIs</h2>
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
              : Restful API docs for devs.
            </li>
          </ul>
        </section>
        <div style={backLinkStyle}>
          <Link href="/">Back to homepage</Link>
        </div>
      </div>
    </MainLayout>
  );
}

// Styles for the portfolio page
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
  margin: '0 0 10px 0',
  fontWeight: '600',
  fontFamily: 'Poppins, sans-serif',
};

const subtitleStyle: CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: '400',
  color: '#154c79',
  fontFamily: 'Poppins, sans-serif',
};

const sectionStyle: CSSProperties = {
  marginBottom: '30px',
};

const sectionTitleStyle: CSSProperties = {
  fontSize: '2rem',
  fontWeight: '600',
  padding: '5px 0px',
  borderRadius: '5px',
  display: 'inline-block',
  fontFamily: 'Poppins, sans-serif',
};

const textStyle: CSSProperties = {
  fontSize: '1.2rem',
  lineHeight: '1.6',
};

const listStyle: CSSProperties = {
  listStyleType: 'none',
  padding: 0,
};

const listItemStyle: CSSProperties = {
  marginBottom: '15px',
};

const linkStyle: CSSProperties = {
  color: '#00BFFF',
  textDecoration: 'none',
};

const backLinkStyle: CSSProperties = {
  marginTop: '60px',
  textAlign: 'center',
  fontSize: '0.8rem',
};
