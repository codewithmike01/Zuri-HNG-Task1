import React, { useState } from 'react';
import { HomeContainer } from './style/Home.style';
import Slack from '../../assests/images/slack.svg';
import Github from '../../assests/images/github.svg';
import ZuriLogo from '../../assests/images/zuri-logo.svg';
import IngressiveLogo from '../../assests/images/ingressive-logo.svg';
import MobileShare from '../../assests/images/mobile-share-button.svg';
import DesktopShare from '../../assests/images/share-button.svg';
import ToolTip from '../../assests/images/Tooltip.svg';
import Camera from '../../assests/images/camera.svg';

const Home = () => {
  const [showToolTip, setShowToolTip] = useState(false);
  const [showCamera, setShowCamera] = useState(false);

  return (
    <HomeContainer toolTip={showToolTip} camera={showCamera}>
      <div className="profile-containter">
        <div className="content"></div>
        <div className="profile-details">
          <div
            className="img-container"
            typeof="button"
            onMouseEnter={() => setShowCamera(true)}
            onMouseLeave={() => setShowCamera(false)}
          >
            <img src={Camera} alt="Camera icon" className="icon" />
          </div>
          <p>Kanu Mike</p>
        </div>

        <span>
          <img src={ToolTip} alt="Share Tool tip" />{' '}
        </span>

        <div className="img-container">
          <img src={MobileShare} alt="Share icon" className="mobile-share" />

          <img
            src={DesktopShare}
            alt="Desktop Share icon"
            className="desktop-share"
            typeof="button"
            onMouseEnter={() => setShowToolTip(true)}
            onMouseLeave={() => setShowToolTip(false)}
          />
        </div>
      </div>
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
