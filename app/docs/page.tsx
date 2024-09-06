'use client';

import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import Link from '@/components/Link';
import { CSSProperties } from 'react';

export default function ApiDocs() {
  useEffect(() => {
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href =
      'https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Poppins:wght@400;600&display=swap';
    document.head.appendChild(fontLink);

    return () => {
      document.head.removeChild(fontLink);
    };
  }, []);

  return (
    <MainLayout>
      <div style={containerStyle}>
        <div style={{ height: '0rem' }}></div>

        <div style={categoryTitleStyle}>API for Devs</div>
        <div style={endpointContainerStyle}>
          <div style={endpointStyle}>
            <h3 style={endpointTitleStyle}>1. Quote</h3>
            <p style={endpointTextStyle}>
              <span style={endpointPathStyle}>api/quote</span>
            </p>
          </div>

          <div style={endpointStyle}>
            <h3 style={endpointTitleStyle}>2. Rashifal</h3>
            <p style={endpointTextStyle}>
              <span style={endpointPathStyle}>api/rashifal</span>
            </p>
          </div>

          <div style={endpointStyle}>
            <h3 style={endpointTitleStyle}>3. Date/Time</h3>
            <p style={endpointTextStyle}>
              <span style={endpointPathStyle}>api/info</span>
            </p>
          </div>

          <div style={endpointStyle}>
            <h3 style={endpointTitleStyle}>4. Meta Llama AI</h3>
            <p style={endpointTextStyle}>
              <span style={endpointPathStyle}>api/ai?msg=$&id=$&apikey=$</span>
            </p>
            <p style={textStyle}>
              <strong>- msg*</strong> (required)
              <br />
              <strong>- id*</strong> (required)
              <br />
              <strong>- apikey*</strong> (required)
            </p>
          </div>

          <div style={endpointStyle}>
            <h3 style={endpointTitleStyle}>5. Llama AI</h3>
            <p style={endpointTextStyle}>
              <span style={endpointPathStyle}>api/chat?msg=$</span>
            </p>
            <p style={textStyle}>
              <strong>- msg*</strong> (required)
            </p>
          </div>

          <div style={endpointStyle}>
            <h3 style={endpointTitleStyle}>6. Mistral AI</h3>
            <p style={endpointTextStyle}>
              <span style={endpointPathStyle}>api/mistral?prompt=$</span>
            </p>
            <p style={textStyle}>
              <strong>- prompt*</strong> (required)
            </p>
          </div>

          <div style={endpointStyle}>
            <h3 style={endpointTitleStyle}>7. Gemini AI</h3>
            <p style={endpointTextStyle}>
              <span style={endpointPathStyle}>api/gemini?prompt=$</span>
            </p>
            <p style={textStyle}>
              <strong>- prompt*</strong> (required)
            </p>
          </div>

          <div style={endpointStyle}>
            <h3 style={endpointTitleStyle}>8. Generate AI</h3>
            <p style={endpointTextStyle}>
              <span style={endpointPathStyle}>api/generate?prompt=$</span>
            </p>
            <p style={textStyle}>
              <strong>- prompt*</strong> (required)
            </p>
          </div>

          <div style={endpointStyle}>
            <h3 style={endpointTitleStyle}>9. Lyrics</h3>
            <p style={endpointTextStyle}>
              <span style={endpointPathStyle}>api/lyrics?song=$&artist=$</span>
            </p>
            <p style={textStyle}>
              <strong>- song*</strong> (required)
              <br />
              <strong>- artist</strong> (optional)
            </p>
          </div>
        </div>

        <div style={baseUrlContainerStyle}>
          <p style={baseUrlStyle}>
            {' '}
            <a
              href="https://sarkardocs.vercel.app"
              style={linkStyle}
              target="_blank"
              rel="noopener noreferrer"
            >
              https://sarkardocs.vercel.app
            </a>
          </p>
        </div>

        <p style={apiDescriptionStyle}>
          Restful API for devs! Feel free to use according to your usage. For apikey contact the
          owner. Enjoy your stay!
        </p>

        <div style={{ ...backLinkStyle, marginTop: '80px' }}>
          <Link href="/" aria-label="Back to homepage">
            Back to homepage
          </Link>
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

const baseUrlContainerStyle: CSSProperties = {
  marginBottom: '20px',
  display: 'flex',
  justifyContent: 'center',
};

const baseUrlStyle: CSSProperties = {
  fontSize: '1.1rem',
  lineHeight: '1.6',
  fontWeight: '600',
  padding: '5px 20px',
  marginTop: '30px',
  border: '2px solid  #154C79',
  borderRadius: '50px',
  textAlign: 'center',
};

const linkStyle: CSSProperties = {
  color: '#154c79',
  textDecoration: 'none',
  fontWeight: '600',
};

const categoryTitleStyle: CSSProperties = {
  fontSize: '1.6rem',
  fontWeight: '600',
  textAlign: 'center',
  color: '#ffffff',
  margin: '3rem 0 3rem',
  fontFamily: 'Poppins, sans-serif',
  padding: '5px 10px',
  backgroundColor: '#56647D',
  borderRadius: '20px',
};

const endpointContainerStyle: CSSProperties = {
  marginBottom: '40px',
};

const endpointStyle: CSSProperties = {
  marginBottom: '50px',
};

const endpointTitleStyle: CSSProperties = {
  fontSize: '1.3rem',
  fontWeight: '600',
  marginBottom: '3px',
  fontFamily: 'Poppins, sans-serif',
};

const endpointTextStyle: CSSProperties = {
  fontSize: '1.1rem',
  padding: '5px',
  borderRadius: '4px',
  marginBottom: '10px',
  whiteSpace: 'pre-wrap',
};

const endpointPathStyle: CSSProperties = {
  color: '#154C79',
  fontWeight: 'bold',
  marginLeft: '15px',
  textDecoration: 'underline',
};

const textStyle: CSSProperties = {
  fontSize: '1.1rem',
  lineHeight: '1.5',
  marginLeft: '20px',
};

const apiDescriptionStyle: CSSProperties = {
  fontSize: '1rem',
  fontWeight: '900',
  textAlign: 'center',
  margin: '50px auto',
  maxWidth: '800px',
  fontFamily: 'Poppins, sans-serif',
  lineHeight: '1.8',
  textDecoration: 'underline',
};

const backLinkStyle: CSSProperties = {
  textAlign: 'center',
  fontSize: '0.9rem',
  fontFamily: 'Poppins, sans-serif',
};
