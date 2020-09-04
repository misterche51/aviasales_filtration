import React from 'react';
import classes from './InputCheckbox.module.scss';

const InputCheckbox = ({name, id, label, checked, onChange}) => {
  return (
    <>
      <input className={classes.input} type="checkbox" name={name} id={id} checked={checked} onChange={e => onChange(e.target.checked)}/>
      <label className={classes.label} htmlFor={id}>{label}</label>
    </>
  );
}


export default InputCheckbox;

