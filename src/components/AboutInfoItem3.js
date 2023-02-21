import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PText from './Ptext';

const AboutItemStyles3 = styled.div`
  display: flex;
  margin-top: 4rem;
  .title {
    font-size: 2.4rem;
  }
  .items {
    display: flex;
    gap: 1.5rem;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
    .para
    {
      font-size:1.6rem !important;
      max-width:70rem;
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
      gap: 1rem;
      margin:0rem;
    }
    .title {
      font-size: 2rem;
    }
  }
`;

export default function AboutInfoItem3({
  items = ['HTML', 'CSS'],
  link='',
}) {
  return (
    <AboutItemStyles3>
      <Link to={link}>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <PText>{item}</PText>
          </div>
        ))}
      </div>
      </Link>
    </AboutItemStyles3>
  );
}
