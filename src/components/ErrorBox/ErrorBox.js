import React from 'react';
import classes from './ErrorBox.module.scss';

const ErrorBox = ({message, textButton, url, onRefresh}) => {
  return (
    <div className={classes.box}>
      <p className={classes.box__text}>{message}</p>
      <button className={classes.box__button} onClick={() => onRefresh(url)}>{textButton}</button>
    </div>
  );
}

export default ErrorBox;
