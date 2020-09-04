import React from 'react';
import classes from './Logo.module.scss';
import LogoImg from'./Logo.png'

const Logo = () => {
  return (
    <a className={classes.logo} href="/">
      <img src={LogoImg} width="60" height="60" alt={"Логотип компании Aviasales"}/>
    </a>
  );
}

export default Logo;
