import React from 'react';
import classes from './App.module.scss';
import Logo from '../Logo/Logo';
import TicketList from '../TicketList/TicketList';
import Filtration from '../Filtration/Filtration';
import Toggler from '../Toggler/Toggler';
import { connect } from 'react-redux';

function App() {
  return (
    <div className={classes.app}>
      <div className={classes.app__logo}>
        <Logo />
      </div>
      <div className={classes.app__container}>
        <div className={classes.app__flex}>
          <div className={classes.app__filters}>
            <Filtration name="filtration" />
          </div>
          <div className={classes.app__main}>
            <div className={classes.app__toggler}>
              <Toggler togglerName="filtration"/>
            </div>
            <div className={classes.app__tickets}>
              <TicketList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default App;
// const mapStateToProps = (state) => {
//   return {
//       hasErrored: state.app.itemsHasErrored,
//       isLoading: state.app.itemsIsLoading
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//       fetchData: (url) => dispatch(itemsFetchData(url))
//   };
// };

export default connect()(App);