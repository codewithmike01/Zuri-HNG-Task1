import React from 'react';
import { HomeContainer } from './style/Home.style';
import Slack from '../../assests/images/slack.svg';
import Github from '../../assests/images/github.svg';

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
    </HomeContainer>
  );
};

export default Home;
