import React from 'react';
import classes from './Toggler.module.scss';
import {toggleSortingType} from '../../redux/actions';
import { connect } from 'react-redux';

const Toggler = ({ togglerName, sortingBy, sortInputClickHandler, ids }) => {

  const labels = {
    price: "Самый дешевый",
    speed: "Самый быстрый"
  }

  const radios = ids.map(id => {
    const checked = sortingBy === id ? true : false;
    return (
      <React.Fragment key={id}>
        <input type="radio" name={togglerName} id={id} className={classes.toggler__input} defaultChecked={checked} onChange={e => sortInputClickHandler(e.target.id)} />
        <label className={classes.toggler__label} htmlFor={id}>{labels[id]}</label>
      </React.Fragment>
    )
  });

  return (
    <form className={classes.toggler}>
      {radios}
    </form>
  );
}
const mapStateToProps = (state) => {
  const { sortingBy } = state.sortingTicketsReducer;
  return {
    sortingBy
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sortInputClickHandler: (value) => dispatch(toggleSortingType(value))
  };
};

export default connect( mapStateToProps, mapDispatchToProps)(Toggler);
