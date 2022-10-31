import React, { useState } from 'react';
import { HomeContainer } from './style/Home.style';
import Slack from '../../assests/images/slack.svg';
import Github from '../../assests/images/github.svg';
import ZuriLogo from '../../assests/images/zuri-logo.svg';
import IngressiveLogo from '../../assests/images/ingressive-logo.svg';
import { BiShare, BiDotsHorizontalRounded } from 'react-icons/bi';
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
            tabindex="0"
            id="profile__img"
          >
            <img src={Camera} alt="Camera icon" className="icon" />
          </div>
          <p id="twitter">Kanu Mike</p>
          <p id="slack" hidden>
            {' '}
            kanu Mike
          </p>
        </div>

        <span>
          <img src={ToolTip} alt="Share Tool tip" />{' '}
        </span>

        <div
          className="img-container"
          typeof="button"
          onMouseEnter={() => setShowToolTip(true)}
          onMouseLeave={() => setShowToolTip(false)}
          tabindex="0"
        >
          <BiDotsHorizontalRounded className="mobile-share" />
          <BiShare className="desktop-share" />
        </div>
      </div>
      <div className="links">
        <a
          href="https://twitter.com/michotall95"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter Link
        </a>
        <a
          href="https://training.zuri.team/"
          rel="noopener noreferrer"
          target="_ blank"
          id="btn__zuri"
        >
          Zuri Team
        </a>
        <a
          href="http://books.zuri.team"
          rel="noopener noreferrer"
          target="_blank"
          id="books"
        >
          Zuri Books
        </a>
        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=kanuMike"
          rel="noopener noreferrer"
          target="_blank"
          id="book__python"
        >
          Python Books
        </a>
        <a
          href="https://background.zuri.team"
          rel="noopener noreferrer"
          target="_blank"
          id="pitch"
        >
          Background Check for Coders
        </a>
        <a
          href="https://books.zuri.team/design-rules "
          rel="noopener noreferrer"
          target="_blank"
          id="book__design"
        >
          Design Books
        </a>
      </div>

      <div className="social-links">
        <a href="none" target="_blank">
          <img src={Slack} alt="Slack logo" />
        </a>
        <a
          href="https://github.com/Ginohmk"
          rel="noopener noreferrer"
          target="_blank"
        >
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
