import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;

  .container
  {
    display:flex;
    flex-direction:column;
    align-items:center;
  }

  .contactSection__wrapper {
    display: flex;
    flex-direction:column;
    gap: 2rem;
    margin-top: 7rem;
    justify-content: center;
    position: relative;
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="contact" subheading="Get in touch" />
        <div className="contactSection__wrapper">
            <ContactInfoItem icon={<MdLocalPhone />} text="+91 6355025385" />
            <ContactInfoItem icon={<MdEmail />} text="shahhilag16@gmail.com" />
            <ContactInfoItem text="Gujarat,India" />
        </div>
      </div>
    </ContactSectionStyle>
  );
}
