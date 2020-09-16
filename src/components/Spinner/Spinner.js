import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import classes from './Spinner.module.scss'
import Loader from 'react-loader-spinner'

const Spinner = () => {
  return (
    <Loader className={classes.spinner}
         type="Puff"
         height={100}
         width={100}
      />
  );
}

export default Spinner;
