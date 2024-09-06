'use client';

import React from 'react';
import Link from '@/components/Link';
import MainLayout from '@/layouts/MainLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faDocker,
  faPython,
  faNode,
  faGithub,
  faJava,
  faHtml5,
  faWindows,
  faApple,
} from '@fortawesome/free-brands-svg-icons';

function Expertise() {
  return (
    <MainLayout>
      <div className="container" id="expertise">
        <div className="skills-container">
          <h1>E X P E R T I S E</h1>
          <div className="skills-grid">
            <div className="skill">
              <FontAwesomeIcon icon={faReact} size="5x" className="icon" />
              <h3 className="title">Web Development</h3>
              <p className="description">
                I have built a diverse array of web applications from scratch using modern
                technologies such as React and Flask. I have a strong proficiency in the SDLC
                process and frontend + backend development.
              </p>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faDocker} size="5x" className="icon" />
              <h3 className="title">DevOps & Automation</h3>
              <p className="description">
                Once the application is built, I help clients set up DevOps testing, CI/CD
                pipelines, and deployment automation to support the successful Go-Live.
              </p>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faPython} size="5x" className="icon" />
              <h3 className="title">GenAI & LLM</h3>
              <p className="description">
                Stay relevant in the market by leveraging the latest AI models in your projects. I
                have professional experience building enterprise-grade GenAI-enabled solutions to
                empower intelligent decision-making.
              </p>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faNode} size="5x" className="icon" />
              <h3 className="title">Node.js Backend</h3>
              <p className="description">
                Proficient in developing scalable server-side applications using Node.js, with a
                focus on performance and maintainability.
              </p>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faJava} size="5x" className="icon" />
              <h3 className="title">Java Development</h3>
              <p className="description">
                Experience in developing robust and scalable applications using Java, with a focus
                on enterprise-level solutions and backend systems.
              </p>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faHtml5} size="5x" className="icon" />
              <h3 className="title">HTML/CSS</h3>
              <p className="description">
                Experience with building semantic and accessible web pages using HTML5.
              </p>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faGithub} size="5x" className="icon" />
              <h3 className="title">Version Control</h3>
              <p className="description">
                Experienced with version control systems, particularly Git and GitHub, for
                collaborative development and code management.
              </p>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faApple} size="5x" className="icon" />
              <h3 className="title">Apple Ecosystem</h3>
              <p className="description">
                Experienced in using and developing applications within the Apple ecosystem,
                including macOS and iOS environments.
              </p>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faWindows} size="5x" className="icon" />
              <h3 className="title">Windows OS</h3>
              <p className="description">
                Proficient in using and managing Windows operating systems for various applications,
                including software development and system administration.
              </p>
            </div>
          </div>

          <div className="back-to-home">
            <Link href="/">Back to homepage</Link>
          </div>
        </div>

        <style jsx>
          {`
            .skills-container {
              padding: 5% 10%;
              display: flex;
              flex-direction: column;
              text-align: center;
            }

            .skills-container h1 {
              font-size: 2.5rem;
              font-weight: bold;
              color: #145c79;
              margin-bottom: 3rem;
            }

            .skills-container .skills-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              grid-gap: 50px;
              margin-top: 3rem;
            }

            .skills-container .skills-grid .skill {
              align-items: center;
              text-align: center;
              margin-bottom: 3rem;
            }

            .icon {
              margin-bottom: 1rem;
            }

            .title {
              font-size: 1.5rem;
              font-weight: bold;
              font-family: 'Arial', sans-serif;
              margin: 1rem 0;
            }

            .description {
              font-size: 1.2rem;
              font-weight: normal;
              margin: 0;
            }

            .back-to-home {
              text-align: center;
              margin-top: 5rem;
              margin-bottom: 2rem;
            }

            @media (max-width: 768px) {
              .skills-container {
                display: block;
                padding-left: 5%;
                padding-right: 5%;
              }

              .skills-container .skills-grid {
                display: initial;
              }

              .skills-container .skills-grid .skill {
                padding-bottom: 5%;
              }
            }

            @media (max-width: 567px) {
              .skills-container {
                font-size: 12px;
              }
            }
          `}
        </style>
      </div>
    </MainLayout>
  );
}

export default Expertise;
