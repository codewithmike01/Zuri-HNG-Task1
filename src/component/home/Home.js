import React from 'react';
import { HomeContainer } from './style/Home.style';
import Slack from '../../assests/images/slack.svg';
import Github from '../../assests/images/github.svg';
import ZuriLogo from '../../assests/images/zuri-logo.svg';
import IngressiveLogo from '../../assests/images/ingressive-logo.svg';

const Home = () => {
  return (
    <HomeContainer>
      <div className="links">
        <a href="none" target="_blank">
          Twitter Link
        </a>
        <a href="none" target="_blank">
          Zuri Team
        </a>
        <a href="none" target="_blank">
          Zuri Books
        </a>
        <a href="none" target="_blank">
          Python Books
        </a>
        <a href="none" target="_blank">
          Background Check for Coders
        </a>
        <a href="none" target="_blank">
          Design Books
        </a>
      </div>

      <div className="social-links">
        <a href="none" target="_blank">
          <img src={Slack} alt="Slack logo" />
        </a>
        <a href="none" target="_blank">
          <img src={Github} alt="Github logo" />
        </a>
      </div>
      <hr />
      <footer>
        <img src={ZuriLogo} alt="Zuri logo" />
        <p>HNG Intership 9 Frontend Task</p>
        <img src={IngressiveLogo} alt="Ingressive logo" />
      </footer>
    </HomeContainer>
  );
};

export default Home;
