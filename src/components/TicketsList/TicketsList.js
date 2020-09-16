import React from 'react';
import classes from './TicketsList.module.scss';
import TicketItem from '../TicketItem/TicketItem';
import Spinner from '../Spinner/Spinner';
import ErrorBox from '../ErrorBox/ErrorBox';
import { getActualTicketsList } from './helpers/helpers';

const Loader = ({loaded, errored}) => {
  return !loaded && !errored? <Spinner /> : null;
}

const ErrorMessage = ({hasError, onRefresh}) => {
 return hasError ? <ErrorBox
  message="Что-то пошло не так"
  textButton="Повторить запрос"
  url="https://front-test.beta.aviasales.ru/"
  onRefresh={onRefresh} /> : null;
}

const List = ({
  ticketsList,
  selectedFilters,
  sortingBy,
  loaded,
  errored
}) => {
  const filteredAndSortedList = getActualTicketsList(ticketsList, selectedFilters, sortingBy);
  const hasResults = filteredAndSortedList.length !== 0 && loaded && !errored;
  if (!hasResults) return <h1>Рейсов, подходящих под заданные фильтры, не найдено</h1>;

  return filteredAndSortedList.map(({ price, carrier, segments }) =>
    <li className={classes["tickets-list__item"]} key={JSON.stringify(segments[0])}>
      <TicketItem
        price={price}
        carrier={carrier}
        segments={segments} />
    </li>
  )
};

const TicketsList = ({
  ticketsList = [],
  ticketsLoadingFinished,
  searchIdisErrored,
  sortingBy,
  selectedFilters,
  fetchRefreshHandler
}) => {

  return (
    <ul className={classes["tickets-list"]}>
      <Loader loaded={ticketsLoadingFinished} errored={searchIdisErrored}/>
      <ErrorMessage onRefresh={fetchRefreshHandler} hasError={searchIdisErrored} />
      <List
        ticketsList={ticketsList}
        selectedFilters={selectedFilters}
        sortingBy={sortingBy}
        loaded={ticketsLoadingFinished}
        errored={searchIdisErrored} />
    </ul>
  );
}

export default TicketsList;
