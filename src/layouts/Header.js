import React, { useState } from 'react';

import './Header.css';
import logo from '../assets/img/png/logo.png';
import LanguageIcon from '../assets/img/svg/icon-language.svg';
import LanguageHoverIcon from '../assets/img/svg/icon-language-hover.svg';

const Header = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div>
      <div className="list">
        <img src={logo} alt="RateACompany logo" />
        <div>
          <a href="/" className="headerButton">
            Noter
          </a>

          <a href="/" className="headerSpecialButton">
            Audit RSE
          </a>

          <a href="/" className="headerButton">
            Devenir pro
          </a>

          <a href="/" className="headerButton">
            Contact
          </a>
        </div>
        <div className="rightHeader">
          <span
            className="languageButton"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {!isHovering ? (
              <React.Fragment>
                <img
                  src={LanguageIcon}
                  style={{ marginRight: '10px' }}
                  alt="language-icon"
                ></img>
                FR
              </React.Fragment>
            ) : (
              <React.Fragment>
                <img
                  src={LanguageHoverIcon}
                  style={{ marginRight: '10px' }}
                  alt="language-icon"
                ></img>
                FR
                <div className="dropdown-content">
                  <a href="#" className="frenchButton">
                    Francais
                  </a>
                  <a href="#" className="englishButton">
                    English
                  </a>
                </div>
              </React.Fragment>
            )}
          </span>

          <a href="/" className="loginButton">
            Connexion
          </a>

          <a href="/" className="registerButton">
            Inscription
          </a>
        </div>
      </div>
    </div>
  );
};
export default Header;
