'use client';

import React, { useEffect } from 'react';
import 'prismjs/themes/prism.css';
import 'prismjs/prism.js';
import MainLayout from '@/layouts/MainLayout';
import Link from '@/components/Link';

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
        <div style={baseUrlContainerStyle}>
          <p style={baseUrlStyle}>
            Base:{' '}
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

        <div style={{ ...categoryTitleStyle, marginTop: '2rem' }}>AI Models</div>
        <div style={endpointContainerStyle}>
          <div style={endpointStyle}>
            <h3 style={endpointTitleStyle}>1. Meta Llama AI</h3>
            <p style={endpointTextStyle}>
              <span style={endpointPathStyle}>api/ai?msg=$&id=$&apikey=$</span>
            </p>
            <p style={textStyle}>
              <strong>msg*</strong> (required)
              <br />
              <strong>id*</strong> (required)
              <br />
              <strong>apikey*</strong> (required)
            </p>
          </div>

          <div style={endpointStyle}>
            <h3 style={endpointTitleStyle}>2. Llama AI</h3>
            <p style={endpointTextStyle}>
              <span style={endpointPathStyle}>api/chat?msg=$</span>
            </p>
            <p style={textStyle}>
              <strong>msg*</strong> (required)
            </p>
          </div>

          <div style={endpointStyle}>
            <h3 style={endpointTitleStyle}>3. Mistral AI</h3>
            <p style={endpointTextStyle}>
              <span style={endpointPathStyle}>api/mistral?prompt=$</span>
            </p>
            <p style={textStyle}>
              <strong>prompt*</strong> (required)
            </p>
          </div>

          <div style={endpointStyle}>
            <h3 style={endpointTitleStyle}>4. Gemini AI</h3>
            <p style={endpointTextStyle}>
              <span style={endpointPathStyle}>api/gemini?prompt=$</span>
            </p>
            <p style={textStyle}>
              <strong>prompt*</strong> (required)
            </p>
          </div>

          <div style={endpointStyle}>
            <h3 style={endpointTitleStyle}>5. Generate Ai</h3>
            <p style={endpointTextStyle}>
              <span style={endpointPathStyle}>api/generate?prompt=$</span>
            </p>
            <p style={textStyle}>
              <strong>prompt*</strong> (required)
            </p>
          </div>
        </div>

        <div style={{ margin: '3rem 0' }}>
          <div style={categoryTitleStyle}>Misc Api</div>
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
              <h3 style={endpointTitleStyle}>4. Lyrics</h3>
              <p style={endpointTextStyle}>
                <span style={endpointPathStyle}>api/lyrics?song=$&artist=$</span>
              </p>
              <p style={textStyle}>
                <strong>song*</strong> (required)
                <br />
                <strong>artist</strong> (optional)
              </p>
            </div>
          </div>
        </div>

        <div style={{ ...backLinkStyle, marginTop: '20px' }}>
          <Link href="/" aria-label="Back to homepage">
            Back to homepage
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}

const containerStyle: React.CSSProperties = {
  padding: '20px',
  maxWidth: '800px',
  margin: 'auto',
  fontFamily: 'Poppins, sans-serif',
};

const baseUrlContainerStyle: React.CSSProperties = {
  marginBottom: '20px',
};

const baseUrlStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  lineHeight: '1.6',
  fontWeight: '600',
};

const linkStyle: React.CSSProperties = {
  color: '#1e90ff',
  textDecoration: 'none',
  fontWeight: '600',
};

const categoryTitleStyle: React.CSSProperties = {
  fontSize: '1.6rem',
  fontWeight: '600',
  textAlign: 'center' as React.CSSProperties['textAlign'], // Explicitly cast to correct type
  color: '#ffffff',
  margin: '2rem 0 1rem',
  fontFamily: 'Poppins, sans-serif',
  padding: '5px 10px',
  backgroundColor: '#56647D',
  borderRadius: '20px',
};

const endpointContainerStyle: React.CSSProperties = {
  marginBottom: '40px',
};

const endpointStyle: React.CSSProperties = {
  marginBottom: '60px',
};

const endpointTitleStyle: React.CSSProperties = {
  fontSize: '1.3rem',
  fontWeight: '600',
  marginBottom: '0px',
  fontFamily: 'Poppins, sans-serif',
};

const endpointTextStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  padding: '5px',
  borderRadius: '4px',
  marginBottom: '10px',
  whiteSpace: 'pre-wrap',
};

const endpointPathStyle: React.CSSProperties = {
  color: '#154C79',
  fontWeight: 'bold',
  marginLeft: '15px',
};

const textStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  lineHeight: '1.5',
  marginBottom: '50px',
  marginLeft: '20px',
};

const backLinkStyle: React.CSSProperties = {
  textAlign: 'center',
  fontSize: '0.9rem',
  fontFamily: 'Poppins, sans-serif',
};
