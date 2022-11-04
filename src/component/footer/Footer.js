import React from 'react';
import { FooterContainer } from './Footer.styles';
import ZuriLogo from '../../assests/images/zuri-logo.svg';
import IngressiveLogo from '../../assests/images/ingressive-logo.svg';

const Footer = () => {
  return (
    <FooterContainer>
      <img src={ZuriLogo} alt="Zuri logo" />
      <p>HNG Intership 9 Frontend Task</p>
      <img src={IngressiveLogo} alt="Ingressive logo" />
    </FooterContainer>
  );
};

export default Footer;
