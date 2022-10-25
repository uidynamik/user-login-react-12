import React from 'react';
import './CardForm.scss';
import userIcon from '../../icons/user.svg';
import lockIcon from '../../icons/lock.svg';

export const CardForm = () => (
  <form className="form">
    <div className="form-item">
      <span className="form-icon">
        <img src={userIcon} alt="user" />
      </span>
      <input type="text" placeholder="Username" />
    </div>
    <div className="form-item">
      <span className="form-icon">
        <img src={lockIcon} alt="user" />
      </span>
      <input type="password" placeholder="Password" />
    </div>
    <button type="submit" className="submitBtn">
      Login
    </button>
  </form>
);
