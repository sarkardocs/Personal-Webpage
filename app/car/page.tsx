'use client';

import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import Link from '@/components/Link';
import Image from 'next/image';

interface CarBoxProps {
  name: string;
  image: string;
  description: string[];
  specifications: string[];
}

const CarBox: React.FC<CarBoxProps> = ({ name, image, description, specifications }) => (
  <article className="carBox">
    <div className="carImageContainer">
      <Image src={image} alt={name} width={500} height={300} />
    </div>
    <div className="carDescribeContainer">
      <h3 className="carName">{name}</h3>
      <p className="carDescription">— {description.join(' ')}</p>
      <h4>Specifications:</h4>
      <ul>
        {specifications.map((spec, index) => (
          <li key={index}>{spec}</li>
        ))}
      </ul>
    </div>

    <style jsx>{`
      .carBox {
        display: flex;
        flex-direction: column;
        padding: 30px;
        margin-top: 40px;
        border-radius: 15px;
        box-shadow: 0px 14px 28px rgba(134, 151, 168, 0.08);
        border: 2px solid white;
        transition: all 0.3s ease;
        font-family: 'Poppins', sans-serif;
      }

      .carBox:first-child {
        margin-top: 0;
      }

      .carImageContainer {
        border-radius: 10px;
        height: auto;
        max-width: 100%;
      }

      .carDescribeContainer {
        margin-top: 30px;
      }

      .carName {
        font-size: 20px;
        color: #154c79;
        font-weight: bold;
        letter-spacing: 1px;
      }

      .carDescription {
        font-size: 17px;
        margin-top: 10px;
      }

      .carDescribeContainer ul {
        list-style: disc inside;
        font-size: 17px;
        line-height: 1.3;
        letter-spacing: 1px;
        margin-top: 20px;
      }

      .carDescribeContainer ul li:not(:first-child) {
        margin-top: 10px;
      }

      .carDescribeContainer h4 {
        font-size: 1.1rem;
        font-weight: bold;
        margin-top: 30px;
        letter-spacing: 1px;
        line-height: 1.2;
      }

      @media (max-width: 768px) {
        .carBox {
          padding: 5%;
        }
      }

      @media (max-width: 567px) {
        .carName {
          font-size: 1.8rem;
        }
      }
    `}</style>
  </article>
);

const cars: CarBoxProps[] = [
  {
    name: 'Bugatti Chiron',
    image: 'static/favicons/bugatti.png',
    description: [
      'The Bugatti Chiron is a luxury sports car known for its high performance and exquisite design.',
      'It is one of the fastest and most powerful production cars in the world.',
    ],
    specifications: ['Top Speed: 261 mph', '0-60 mph: 2.5 seconds', 'Quad-turbocharged W16 engine'],
  },
  {
    name: 'Ferrari LaFerrari',
    image: 'static/favicons/ferrari.png',
    description: [
      'The Ferrari LaFerrari is a hybrid supercar combining a powerful V12 engine with an electric motor, offering exceptional speed and handling.',
    ],
    specifications: [
      'Top Speed: 217 mph',
      '0-60 mph: 2.6 seconds',
      '6.3L V12 engine with hybrid assistance',
    ],
  },
  {
    name: 'McLaren P1',
    image: 'static/favicons/mclaren.png',
    description: [
      'The McLaren P1 is a high-performance hybrid supercar with advanced aerodynamics and a striking design, delivering both speed and agility.',
    ],
    specifications: [
      'Top Speed: 217 mph',
      '0-60 mph: 2.8 seconds',
      '3.8L twin-turbo V8 engine with electric motor',
    ],
  },
  {
    name: 'Porsche 918 Spyder',
    image: 'static/favicons/porsche.png',
    description: [
      'The Porsche 918 Spyder is a plug-in hybrid supercar that combines high performance with cutting-edge technology for an exhilarating driving experience.',
    ],
    specifications: [
      'Top Speed: 214 mph',
      '0-60 mph: 2.5 seconds',
      '4.6L V8 engine with electric motors',
    ],
  },
  {
    name: 'Koenigsegg Jesko',
    image: 'static/favicons/koenigsegg.png',
    description: [
      'The Koenigsegg Jesko is an extreme performance car designed for both road and track, featuring a high-powered engine and advanced aerodynamics.',
    ],
    specifications: [
      'Top Speed: 300 mph (estimated)',
      '0-60 mph: 2.5 seconds',
      '5.0L V8 engine with 1600 hp',
    ],
  },
  {
    name: 'Pagani Huayra',
    image: 'static/favicons/pagani.png',
    description: [
      'The Pagani Huayra is a bespoke hypercar known for its unique design and incredible performance, featuring a powerful V12 engine and distinctive styling.',
    ],
    specifications: ['Top Speed: 238 mph', '0-60 mph: 2.8 seconds', '6.0L V12 engine with 730 hp'],
  },
  {
    name: 'BMW i8',
    image: 'static/favicons/bmw.png',
    description: [
      'The BMW i8 is a plug-in hybrid sports car that combines futuristic design with a dynamic driving experience, featuring advanced hybrid technology.',
    ],
    specifications: [
      'Top Speed: 155 mph',
      '0-60 mph: 4.2 seconds',
      '1.5L turbocharged inline-3 engine and electric motor with a combined 369 hp',
    ],
  },
  {
    name: 'Nissan GT-R Nismo',
    image: 'static/favicons/nissan.png',
    description: [
      'The Nissan GT-R Nismo is a high-performance version of the GT-R, known for its powerful engine and advanced technology.',
    ],
    specifications: [
      'Top Speed: 205 mph',
      '0-60 mph: 2.5 seconds',
      '3.8L twin-turbo V6 engine with 600 hp',
    ],
  },
  {
    name: 'Porsche 911 GT2 RS',
    image: 'static/favicons/porsche911.png',
    description: [
      'The Porsche 911 GT2 RS is a track-oriented version of the 911, featuring a turbocharged flat-six engine and lightweight construction.',
    ],
    specifications: [
      'Top Speed: 211 mph',
      '0-60 mph: 2.7 seconds',
      '3.8L twin-turbo flat-six engine with 690 hp',
    ],
  },
];

const CarsSection: React.FC = () => (
  <MainLayout>
    <section className="carsSection" id="cars">
      <div className="sectionHead">
        <span>CHECK OUT THESE</span>
        <h2>c a r s</h2>
      </div>
      <div className="carsContainer sectionContainer">
        {cars.map((car, index) => (
          <CarBox key={index} {...car} />
        ))}
      </div>
      <div className="backToHome">
        <Link href="/">Back to homepage</Link>
      </div>

      <style jsx>{`
        .carsSection {
          padding: 5% 10%;
        }

        .sectionHead {
          text-align: center;
          margin-bottom: 5rem;
        }

        .sectionHead span {
          font-size: 1.5rem;
          font-weight: bold;
          color: #154c79;
          font-family: 'Poppins', sans-serif;
        }

        .sectionHead h2 {
          font-size: 2rem;
          font-weight: bold;
          margin-top: 0.3rem;
          font-family: 'Poppins', sans-serif;
        }

        .carsContainer {
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
          font-size: 1.2rem;
          color: #154c79;
          text-decoration: none;
        }

        .backToHome a:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .carsSection {
            padding: 5%;
          }
        }
      `}</style>
    </section>
  </MainLayout>
);

export default CarsSection;
