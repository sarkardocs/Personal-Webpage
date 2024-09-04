'use client';

import React, { useEffect } from 'react';
import 'prismjs/themes/prism.css';
import 'prismjs/prism.js';
import MainLayout from '@/layouts/MainLayout';
import Link from '@/components/Link';

export default function ApiDocs() {
  useEffect(() => {
    // Dynamically load Merriweather font and other required fonts
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

// Styles for the API documentation page
const containerStyle = {
  padding: '20px',
  maxWidth: '800px',
  margin: 'auto',
  fontFamily: 'Poppins, sans-serif',
};

const baseUrlContainerStyle = {
  marginBottom: '20px',
};

const baseUrlStyle = {
  fontSize: '1.1rem',
  lineHeight: '1.6',
  fontWeight: '600', // Slightly bold text for Base URL
};

const linkStyle = {
  color: '#1e90ff', // Bright sky blue
  textDecoration: 'none',
  fontWeight: '600',
};

const categoryTitleStyle = {
  fontSize: '1.6rem',
  fontWeight: '600',
  textAlign: 'center',
  color: '#ffffff', // Text color for better contrast against the background
  margin: '4rem 0 2rem',
  fontFamily: 'Poppins, sans-serif',
  padding: '5px 10px',
  backgroundColor: '#56647D', // Background color for highlight
  borderRadius: '20px', // Creates an oval shape
};

const endpointContainerStyle = {
  marginBottom: '40px',
};

const endpointStyle = {
  marginBottom: '60px',
};

const endpointTitleStyle = {
  fontSize: '1.3rem',
  fontWeight: '600',
  marginBottom: '0px',
  fontFamily: 'Poppins, sans-serif',
};

const endpointTextStyle = {
  fontSize: '1.1rem',
  padding: '5px',
  borderRadius: '4px',
  marginBottom: '10px',
  whiteSpace: 'pre-wrap',
};

const endpointPathStyle = {
  color: '#154C79',
  fontWeight: 'bold',
  marginLeft: '15px',
};

const textStyle = {
  fontSize: '1.1rem',
  lineHeight: '1.5',
  marginBottom: '50px',
  marginLeft: '20px',
};

const backLinkStyle = {
  textAlign: 'center',
  fontSize: '0.9rem',
  fontFamily: 'Poppins, sans-serif',
};
