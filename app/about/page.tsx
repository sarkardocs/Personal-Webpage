'use client';

import React from 'react';
import Link from '@/components/Link';
import MainLayout from '@/layouts/MainLayout';

function Expertise() {
  return (
    <MainLayout>
      <div className="container" id="expertise">
        <div className="skills-container">
          {/* Top heading with Garamond Premier Pro Roman font */}
          <h1 className="top-heading">Expertise</h1>

          <div className="languages-section">
            <div className="icons-grid">
              <div className="icons-row">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                  alt="Express.js"
                  width="40"
                  height="40"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                  alt="Node.js"
                  width="40"
                  height="40"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  alt="Python"
                  width="40"
                  height="40"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React"
                  width="40"
                  height="40"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                  alt="Linux"
                  width="40"
                  height="40"
                />
              </div>
              <div className="icons-row">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                  alt="C++"
                  width="40"
                  height="40"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="HTML5"
                  width="40"
                  height="40"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  alt="CSS3"
                  width="40"
                  height="40"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                  width="40"
                  height="40"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  alt="TypeScript"
                  width="40"
                  height="40"
                />
              </div>
            </div>
          </div>

          <div className="back-to-home">
            <Link href="/">Back to homepage</Link>
          </div>
        </div>

        <style jsx>{`
          @font-face {
            font-family: 'Garamond Premier Pro';
            src:
              url('/path-to-your-fonts/GaramondPremierPro-Roman.woff2') format('woff2'),
              url('/path-to-your-fonts/GaramondPremierPro-Roman.woff') format('woff');
            font-weight: normal;
            font-style: normal;
          }

          .skills-container {
            padding: 5% 10%;
            display: flex;
            flex-direction: column;
            text-align: center;
          }

          .top-heading {
            font-size: 2.5rem;
            font-family: 'Garamond Premier Pro', serif;
            color: #154c79;
            margin-bottom: 5rem;
            margin-top: 1rem;
          }

          .icons-grid {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }

          .icons-row {
            display: flex;
            justify-content: center;
            gap: 20px;
          }

          .icons-row img {
            transition: transform 0.3s ease;
          }

          .icons-row img:hover {
            transform: scale(1.1);
          }

          .back-to-home {
            font-size: 1rem;
            text-align: center;
            margin-top: 13rem;
            margin-bottom: 1rem;
          }

          @media (max-width: 768px) {
            .skills-container {
              display: block;
              padding-left: 5%;
              padding-right: 5%;
            }

            .icons-row {
              flex-wrap: wrap;
              gap: 10px;
            }
          }

          @media (max-width: 567px) {
            .skills-container {
              font-size: 12px;
            }
          }
        `}</style>
      </div>
    </MainLayout>
  );
}

export default Expertise;
