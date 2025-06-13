import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/hero.png';
import Button from './Button';
import {FaLinkedin,FaGithub} from 'react-icons/fa';
import {SiCodechef,SiCodeforces,SiLeetcode} from 'react-icons/si';

import PText from './Ptext';

const HeroStyles = styled.div`

  .container
  {
    margin-top:10rem !important;
  }

  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 7rem;
      color: var(--white);
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 550px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero__info {
    margin-top: -21rem;
  }
  .flexing
  {
    display:flex;
    justify-content: center;
    margin: 8rem;
    gap: 6rem;
    li
    {
      font-size:4rem;
    }
  }


  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }

    .flexing
    {
        margin:0;
        margin-top: 5rem;
        gap: 4rem;
      
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, I am</span>
            <span className="hero__name">Hilag Shah</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero__info">
            <PText>
              I am currently a Technology Analyst 2 at Fiserv and have a keen interest in developing full stack web applications that bring about a change in the day-to-day lives of people.
            </PText>
            <Button btnText="See My Works" btnLink="/projects" />
          </div>
          <div>
              <div className='flexing'>
                <li>
                  <a
                    href="https://www.codechef.com/users/shahhilag"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SiCodechef />
                  </a>
                </li>
                <li>
                  <a
                    href="https://codeforces.com/profile/shahhilag4"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SiCodeforces />
                  </a>
                </li>
                <li>
                  <a
                    href="https://leetcode.com/shahhilag4/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SiLeetcode />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/shahhilag4"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/shahhilag4/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </li>
              </div>
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
