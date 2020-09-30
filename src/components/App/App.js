import React, { useCallback, useEffect} from 'react';
import classes from './App.module.scss';
import Logo from '../Logo/Logo';
import TicketsListContainer from '../../containers/TicketsListContainer';
import Filtration from '../Filtration/Filtration';
import Toggler from '../Toggler/Toggler';
import { fetchSearchId } from '../../redux/actions';
import { connect } from 'react-redux';


function App({fetchSearchIdHandler}) {

  const url = "https://aviasales-test-api.java-mentor.com/";

  const fetchTickets = useCallback(() => fetchSearchIdHandler(url), [fetchSearchIdHandler])

  useEffect(() => {
   fetchTickets()
  }, [fetchTickets])

  return(
    <div className={classes.app}>
      <div className={classes.app__logo}>
        <Logo />
      </div>
      <div className={classes.app__container}>
        <div className={classes.app__flex}>
          <div className={classes.app__filters}>
            <Filtration name="filtration" ids={['all', 'without', 'one', 'two', 'three']}/>
          </div>
          <div className={classes.app__main}>
            <div className={classes.app__toggler}>
              <Toggler togglerName="filtration" ids={['price', 'speed']}/>
            </div>
            <div className={classes.app__tickets}>
              <TicketsListContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchSearchIdHandler: (url) => dispatch(fetchSearchId(url))
  };
};

export default connect(null, mapDispatchToProps)(App);