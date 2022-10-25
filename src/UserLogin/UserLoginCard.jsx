import React from 'react';
import './UserLoginCard.scss';
import { CardForm } from './CardForm/CardForm';
import { CardFoooter } from './CardFooter/CardFooter';

export const UserLoginCard = () => {
  return (
    <div className="login-card">
      <section className="main">
        <a href="#signUp" className="signup-link">
          Sign Up
        </a>
        <CardForm />
        <a href="#fp">Forgot Password?</a>
      </section>
      <CardFoooter />
    </div>
  );
};
