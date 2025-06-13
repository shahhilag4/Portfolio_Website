import React from 'react';
import { CgCPlusPlus } from 'react-icons/cg';
import { SiJava,SiReact,SiAngular,SiSpringboot,SiPython  } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { FaAws } from "react-icons/fa";
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
            icon={<SiJava />}
          />
          <ServicesSectionItem
            icon={<SiPython />}
          />
          <ServicesSectionItem
            icon={<GrMysql />}
          />
          <ServicesSectionItem
            icon={<SiSpringboot />}
          />
           <ServicesSectionItem
            icon={<FaAws />}
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
