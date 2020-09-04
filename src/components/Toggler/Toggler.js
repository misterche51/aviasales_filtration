import React from 'react';
import classes from './Toggler.module.scss';
import {toggleSortingType} from '../../redux/actions';
import { connect } from 'react-redux';

const Toggler = (props) => {
  const { togglerName, sortInputClickHandler } = props;
  return (
    <form className={classes.toggler}>
      <input type="radio" name={togglerName} id="price" className={classes.toggler__input} onChange={e => sortInputClickHandler(e.target.id) }  />
      <label className={classes.toggler__label} htmlFor="price">Самый дешевый</label>
      <input type="radio" name={togglerName} id="speed" className={classes.toggler__input} onChange={e => sortInputClickHandler(e.target.id)} />
      <label className={classes.toggler__label} htmlFor="speed">Самый быстрый</label>
    </form>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {
    sortInputClickHandler: (value) => dispatch(toggleSortingType(value))
  };
};

export default connect( null, mapDispatchToProps)(Toggler);
