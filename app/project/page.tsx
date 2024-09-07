'use client';

import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import Link from '@/components/Link';

interface WorkBoxProps {
  title: string;
  image: string;
  technologies: string[];
  description: string[];
  liveLink: string;
  repoLink: string;
}

const WorkBox: React.FC<WorkBoxProps> = ({
  title,
  image,
  technologies,
  description,
  liveLink,
  repoLink,
}) => (
  <article className="workBox">
    <div className="workImageContainer">
      <img src={image} alt={title} />
    </div>
    <div className="workDescribeContainer">
      <h3 className="workTitle">{title}</h3>
      <h4>
        Technologies Used:{' '}
        {technologies.map((tech, index) => (
          <span key={index} className="techStack">
            {tech}
          </span>
        ))}
      </h4>
      <ul>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="workLinks">
        <a href={liveLink} className="liveLink" target="_blank" rel="noopener noreferrer">
          Live
        </a>
        <a href={repoLink} className="repoLink" target="_blank" rel="noopener noreferrer">
          Repo
        </a>
      </div>
    </div>

    <style jsx>{`
      .workBox {
        display: flex;
        flex-direction: column;
        padding: 10px;
        margin-top: 50px;
        border-radius: 15px;
        box-shadow: 0px 14px 28px rgba(134, 151, 168, 0.08);
        border: 0px solid #fff;
        transition: all 0.3s ease;
      }

      .workBox:first-child {
        margin-top: 0;
      }

      .workImageContainer {
        border-radius: 10px;
        height: auto;
        max-width: 100%;
      }

      .workImageContainer img {
        width: 100%;
        border-radius: 10px;
        border: 0px solid #fff;
      }

      .workDescribeContainer {
        margin-top: 20px;
      }

      .workTitle {
        font-size: 22px;
        font-weight: bold;
        letter-spacing: 1px;
      }

      .workDescribeContainer ul {
        list-style: disc inside;
        font-size: 17px;
        line-height: 1.3;
        letter-spacing: 1px;
        margin-top: 20px;
      }

      .workDescribeContainer ul li:not(:first-child) {
        margin-top: 10px;
      }

      .workDescribeContainer h4 {
        font-size: 1.1rem;
        margin-top: 7px;
        letter-spacing: 1px;
        line-height: 1.2;
      }

      .workDescribeContainer .techStack {
        color: #154c79;
        display: inline-block;
        padding: 0 5px;
      }

      .workLinks {
        margin-top: 50px;
      }

      .workLinks a {
        font-size: 1.1rem;
        margin-right: 20px;
        color: #154c79;
        text-decoration: underline;
      }

      .workLinks a:focus {
        border: 1px solid #154c79;
      }
    `}</style>
  </article>
);

const works: WorkBoxProps[] = [
  {
    title: 'Personal-Portfolio',
    image: 'static/favicons/mobile.png',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    description: [
      'Completely built with HTML, CSS, JavaScript',
      'Good Looking UI',
      'Fully customisable',
    ],
    liveLink: 'https://sarkardocs.vercel.app/',
    repoLink: 'https://github.com/sarkardocs/Porfolio',
  },
  {
    title: 'Flux-Dev/Schnell',
    image: 'static/favicons/Portfolio.jpg',
    technologies: ['JavaScript', 'Node.js', 'API'],
    description: [
      'Completely built with Node.js, Express, JavaScript',
      'High Q. Img Generator',
      '2 Models Available',
    ],
    liveLink: 'https://sarkardocs.vercel.app/',
    repoLink: 'https://github.com/sarkardocs/Flux',
  },
  {
    title: 'Music-Player',
    image: 'static/favicons/Music-Player-2.0.png',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    description: [
      'Completely built with HTML, CSS, JavaScript',
      'A Good Looking Music Player UI',
      'Real-time updates On Play, Pause, Forwards',
    ],
    liveLink: 'https://music-player-2-0-psi.vercel.app/',
    repoLink: 'https://github.com/sarkardocs/Music-Player',
  },
  {
    title: 'Text-To-Speech',
    image: 'static/favicons/Text-to-Speech.png',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    description: [
      'Completely built with HTML, CSS, JavaScript',
      'A Good Looking Text-to-Speech Converter',
      'Real-time Speech',
    ],
    liveLink: 'https://text-to-speech-one.vercel.app',
    repoLink: 'https://github.com/sarkardocs/Text-To-Speech',
  },
];

const WorksSection: React.FC = () => (
  <MainLayout>
    <section className="worksSection" id="works">
      <div className="sectionHead">
        <span>TAKE A LOOK AT MY</span>
        <h2>P R O J E C T</h2>
      </div>
      <div className="worksContainer sectionContainer">
        {works.map((work, index) => (
          <WorkBox key={index} {...work} />
        ))}
      </div>
      <div className="backToHome">
        <Link href="/">Back to homepage</Link>
      </div>

      <style jsx>{`
        .worksSection {
          padding: 5% 10%;
        }

        .sectionHead {
          text-align: center;
          margin-bottom: 2rem;
        }

        .sectionHead span {
          font-size: 1.5rem;
          font-weight: bold;
          color: #154c79;
        }

        .sectionHead h2 {
          font-size: 2rem;
          font-weight: bold;
          margin-top: 0.3rem;
        }

        .worksContainer {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .sectionContainer {
          margin-top: 3rem;
        }

        .backToHome {
          text-align: center;
          margin-top: 80px;
        }

        .backToHome a {
          font-size: 1.1rem;
          color: #007bff;
          text-decoration: underline;
        }

        .backToHome a:focus {
          border: 1px solid #007bff;
        }

        @media (max-width: 768px) {
          .worksSection {
            padding: 5%;
          }
        }

        @media (max-width: 567px) {
          .sectionHead h2 {
            font-size: 1.8rem;
          }

          .workBox {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  </MainLayout>
);

export default WorksSection;
