import React from 'react';
import classes from './Filtration.module.scss';
import InputCheckbox from '../InputCheckbox/InputCheckbox';
import {
  changeFiltrationToAll,
  changeFiltrationToWithout,
  changeFiltrationToOneTransfer,
  changeFiltrationToTwoTransfer,
  changeFiltrationToThreeTransfer,
  changeFiltrationToNotAll,
} from '../../redux/actions';
import { connect } from 'react-redux';


const Filtration = ({
  name,
  visibleTickets,
  filterChangeToAllHandler,
  filterChangeToWithout,
  filterChangeToOneTransfer,
  filterChangeToTwoTransfer,
  filterChangeToThreeTransfer,
  filterChangeToNotAllHandler
}) => {

  const checkboxes =
    <div className={classes.form__body} >
      <InputCheckbox name={name} id={"all"} label={"Все"} checked={visibleTickets.all} onChange={filterChangeToAllHandler} />
      <InputCheckbox name={name} id={"without"} label={"Без пересадок"} checked={visibleTickets.without} onChange={filterChangeToWithout} />
      <InputCheckbox name={name} id={"one"} label={"1 пересадка"} checked={visibleTickets.one} onChange={filterChangeToOneTransfer} />
      <InputCheckbox name={name} id={"two"} label={"2 пересадки"} checked={visibleTickets.two} onChange={filterChangeToTwoTransfer} />
      <InputCheckbox name={name} id={"three"} label={"3 пересадки"} checked={visibleTickets.three} onChange={filterChangeToThreeTransfer} />
    </div>;
  const checker = () => {
    if (checkboxes.props.children.filter(item => item.props.checked === true).length === checkboxes.props.children.length - 1 && checkboxes.props.children.filter(item => item.props.checked === false)[0].props.id === 'all')
      {
        filterChangeToAllHandler(true)
    }
  }
  return (
    <form className={classes.form} onChange={checker()}>
      <span className={classes.form__title}>Количество пересадок</span>
        {checkboxes}
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    visibleTickets: state.filterTicketsReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterChangeToAllHandler: (status) => dispatch(changeFiltrationToAll(status)),
    filterChangeToWithout: (status) => dispatch(changeFiltrationToWithout(status)),
    filterChangeToOneTransfer: (status) => dispatch(changeFiltrationToOneTransfer(status)),
    filterChangeToTwoTransfer: (status) => dispatch(changeFiltrationToTwoTransfer(status)),
    filterChangeToThreeTransfer: (status) => dispatch(changeFiltrationToThreeTransfer(status)),
    filterChangeToNotAllHandler: () => dispatch(changeFiltrationToNotAll()),
  };
};

export default connect( mapStateToProps, mapDispatchToProps )(Filtration);