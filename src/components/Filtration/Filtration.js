import React from 'react';
import classes from './Filtration.module.scss';
import InputCheckbox from '../InputCheckbox/InputCheckbox';
import { setFilterAll, setFilterId } from '../../redux/actions';
import { connect } from 'react-redux';


const Filtration = ({
  ids,
  name,
  selectedFilters,
  isAllChecked,
  setFilterAllHandler,
  setFilterIdHandler
}) => {

  const labels = {
    all: 'Все',
    without: 'Без пересадок',
    one: '1 пересадка',
    two: '2 пересадки',
    three: '3 пересадки'
  }

  const filters = ids.map(id => {
    const checked = selectedFilters.includes(id) ? true : false;
    return <InputCheckbox
      name={name}
      id={id}
      key={id}
      label={labels[id]}
      checked={ id === 'all' ? isAllChecked : checked }
      onChange={ id === 'all' ? setFilterAllHandler : setFilterIdHandler}/>
    }
  )

  return (
    <form className={classes.form}>
      <span className={classes.form__title}>Количество пересадок</span>
      <div className={classes.form__body}>
        {filters}
      </div>
    </form>
  );
}

const mapStateToProps = (state) => {
  const {selectedFilters, isAllChecked} = state.filterTicketsReducer
  return {
    selectedFilters,
    isAllChecked
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilterAllHandler: (id) => dispatch(setFilterAll(id)),
    setFilterIdHandler: (id) => dispatch(setFilterId(id))
  };
};

export default connect( mapStateToProps, mapDispatchToProps )(Filtration);