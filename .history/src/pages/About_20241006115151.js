import React from 'react';
import styled from 'styled-components';
import PText from '../components/Ptext';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import AboutInfoItem2 from '../components/AboutInfoItem2';
import AboutInfoItem3 from '../components/AboutInfoItem3';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Hilag Shah</span>
              </p>
              <h2 className="about__heading">A Fullstack Web developer</h2>
              <div className="about__info">
                <PText>
                As a Software Engineer at Fiserv, I specialize in developing scalable solutions that power impactful financial technologies. With a robust background in Java Spring Boot, Angular, and full-stack development, I thrive on tackling complex challenges and delivering results that enhance user experiences. Leveraging my experience from winning 5 national hackathons and multiple freelance projects, I'm passionate about driving innovation and making a tangible difference in the tech industry. Let's connect and explore how we can collaborate on meaningful projects together!
                </PText>
              </div>
              <Button btnText="Download Resume" btnLink="https://drive.google.com/file/d/1hASE1LLajgOMc7fe5wya2ztQZgOL04aO/view?usp=drive_link" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="College"
                items={['Dr.D.Y Patil Institute Of Technology,Pimpri,Pune']}
              />
              <AboutInfoItem
                title="Varsity"
                items={['Savitribai Phule Pune University']}
              />
              <AboutInfoItem
                title="CGPA"
                items={['9.24']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['ReactJS','AngularJS']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Spring Boot']}
              />
              <AboutInfoItem
                title="Database"
                items={['SQL']}
              />
              <AboutInfoItem
                title="Languages"
                items={['C++','Java','Python']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>


              <AboutInfoItem2
                title="July 2024 - Present"
                items={['Technology Analyst II at Fiserv']}
              />
              <AboutInfoItem2
                title="July 2023 - July 2024"
                items={['Technology Analyst I at Fiserv']}
              />
              <AboutInfoItem2
                title="July 2022 - Sept 2022"
                items={['Technology Analyst Intern at Fiserv']}
              />
              <AboutInfoItem2
                title="July 2021 - Dec 2021"
                items={['Software Engineer Intern at Pyramid Developers']}
              />
            </div>

            <div className="about__info__item">
              <h1 className="about__info__heading">Volunteer</h1>


              <AboutInfoItem2
                title="Core Developer"
                items={['Fiserv Bullseye']}
              />
              <AboutInfoItem2
                title="Guest Speaker"
                items={['DY Patil, Pimpri']}
              />
              <AboutInfoItem2
                title="Guest Speaker"
                items={['Fiserv YoPro']}
              />
              <AboutInfoItem2
                title="Mentor"
                items={['NIT Bhopal Hackathon']}
              />
              <AboutInfoItem2
                title="Freelancer"
                items={['Woodpecker MicroSystems']}
              />
              <AboutInfoItem2
                title="Freelancer"
                items={['TADS Education']}
              />
              <AboutInfoItem2
                title="Freelancer"
                items={['CogniTensor']}
              />
              <AboutInfoItem2
                title="Contributor"
                items={['GirlScript']}
              />
              <AboutInfoItem2
                title="Contributor"
                items={['Codedamn']}
              />
              <AboutInfoItem2
                title="Founding Member"
                items={['Sampark Plasma']}
              />
              <AboutInfoItem2
                title="Founding Member"
                items={['Programming Club of DYPIT']}
              />
            </div>

            <div className="about__info__item">
              <h1 className="about__info__heading">Achievements</h1>
              <AboutInfoItem3
                items={['Winner @ Fiserv Accelerating AI Ideathon']}
              />

              <AboutInfoItem3
                items={['Top 10 (West Zone) @ Solving for India Hackathon by GFG']}
                link='https://drive.google.com/file/d/1oJkZiHNCSYKrFWmYrxGmcEsCqhrbGuoq/view?usp=drivesdk'
              />
              <AboutInfoItem3
                items={['3rd position @ HackEd V1.0 Hackathon organized by HackerEarth and K12 Techno Services.']}
                link='https://www.hackerearth.com/challenges/hackathon/hack-ed-v10/'
              />
              <AboutInfoItem3
                items={['3rd position @ IEEE Apscript Hackathon organized by IEEE APSIT.']}
                link='https://drive.google.com/file/d/1xck8k-LBOwBDpbX9Iny3VUbNdPz5OhBE/view?usp=sharing'
              />
              <AboutInfoItem3
                items={['3rd position @ WIT Hackathon organized by Walchand Institute Of Technology,Solapur.']}
                link='https://drive.google.com/file/d/1qtJGRA4jRbHCSGkjpTq-4WddoeQBuqvx/view?usp=sharing'
              />
                <AboutInfoItem3
                  items={['Finalist @ SAWO Hackathon an open hackathon conducted by Startup Reseáu (An Open for all age group hackathon).']}
                  link='https://drive.google.com/file/d/1RlT42U4hSndwxuMLhLgXTDO6sPO-Ba8p/view?usp=share_link'
                />
              <AboutInfoItem3
                items={['Winner @ SIH 2022 Internal Hackathon.']}
                link='https://drive.google.com/file/d/1eVwZtEJQOl8P3Y7JoZ8cthKtnObMEP1e/view?usp=share_link'
              />
              <AboutInfoItem3
                items={['Mentor @ MANIT E-Summit 2023 Hackathon.']}
                link='https://drive.google.com/file/d/1CybhePQgenQPfqZPDs2Xh3bIQZR8Md1R/view?usp=share_link'
              />
              <AboutInfoItem3
                items={['Web Development Head @ GDSC DIT 2021-22.']}
                link='https://drive.google.com/file/d/1g0n239EGcCN3DlMcnDCjNxEnD420uKxg/view?usp=share_link'
              />
              <AboutInfoItem3
                items={['Global Rank 81 @ Codechef October Long Challange out of 26000+ participants.']}
              />
              <AboutInfoItem3
                items={['Cleared CodeChef Snackdown Qualification round and Round 1A and secured global rank of 1600 out of 75000+ participants.']}
                link='https://drive.google.com/file/d/1tXxRQXmh7Qg2Huh15v7oXNx5TpA6wW6C/view?usp=share_link'
              />
                <AboutInfoItem3
                  items={['Open Source Contributor - GirlScript (GSWOC 2021).']}
                  link='https://github.com/shahhilag4?tab=overview&from=2021-12-01&to=2021-12-31'
                />
              <AboutInfoItem3
                items={['Open Source Contributor - Codedamn (Hacktoberfest 2021).']}
                link='https://github.com/shahhilag4?tab=overview&from=2021-12-01&to=2021-12-31'
              />
              <AboutInfoItem3
                items={['Personal Best @ Google KickStart-2518 and Google HashCode-30 points.']}
                link='https://drive.google.com/file/d/11PZlL1PofXohM9AwAmhMmlYiDTJfXpW8/view?usp=share_link'
              />
              <AboutInfoItem3
                items={['Published research paper on the project AIYOJAN.']}
                link='https://doi.org/10.22214/ijraset.2022.48116'
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
