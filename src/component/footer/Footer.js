import React from 'react';
import { FooterContainer } from './Footer.styles';
import ZuriLogo from '../../assests/images/zuri-logo.svg';
import IngressiveLogo from '../../assests/images/ingressive-logo.svg';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <hr />
        <div className="main">
          <img src={ZuriLogo} alt="Zuri logo" />
          <p>HNG Intership 9 Frontend Task</p>
          <img src={IngressiveLogo} alt="Ingressive logo" />
        </div>
      </FooterContainer>
    </>
  );
};

export default Footer;
