import React from 'react';
import { CgCPlusPlus } from 'react-icons/cg';
import { SiHtml5,SiCss3,SiJavascript,SiJava,SiMongodb,SiReact,SiAngular,SiSpringboot,SiGit,SiHeroku,SiNetlify,SiFigma } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 5rem;
    justify-content: center;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="Tools I use" heading="My Tech Stack" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<CgCPlusPlus />}
          />
          <ServicesSectionItem
            icon={<SiHtml5/>}
          />
          <ServicesSectionItem
            icon={<SiCss3 />}
          />
          <ServicesSectionItem
            icon={<SiJavascript />}
          />
          <ServicesSectionItem
            icon={<SiJava />}
          />
          <ServicesSectionItem
            icon={<GrMysql />}
          />
          <ServicesSectionItem
            icon={<SiMongodb />}
          />
          <ServicesSectionItem
            icon={<SiReact />}
          />
          <ServicesSectionItem
            icon={<SiAngular />}
          />
          <ServicesSectionItem
            icon={<SiSpringboot />}
          />
          <ServicesSectionItem
            icon={<SiGit/>}
          />
          <ServicesSectionItem
            icon={<SiHeroku/>}
          />
          <ServicesSectionItem
            icon={<SiNetlify/>}
          />
          <ServicesSectionItem
            icon={<SiFigma/>}
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
