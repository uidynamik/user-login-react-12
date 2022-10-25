import React from 'react';
import './CardFooter.scss';
import facebookIcon from '../../icons/facebook.svg';
import behanceIcon from '../../icons/behance.svg';
import googlePlusIcon from '../../icons/google-plus.svg';
import twitterIcon from '../../icons/twitter.svg';

export const CardFoooter = () => (
  <footer className="footer">
    <div className="footer-title">Sign in with</div>
    <div className="icons">
      <a href="#facebook" className="footer-icon">
        <img src={facebookIcon} alt="facebook" />
      </a>
      <a href="#google-plus" className="footer-icon">
        <img src={googlePlusIcon} alt="google plus" />
      </a>
      <a href="#twitter" className="footer-icon">
        <img src={twitterIcon} alt="twitter" />
      </a>
      <a href="#behance" className="footer-icon">
        <img src={behanceIcon} alt="behance" />
      </a>
    </div>
  </footer>
);
