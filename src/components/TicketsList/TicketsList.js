import React from 'react';
import classes from './TicketsList.module.scss';
import TicketItem from '../TicketItem/TicketItem';
import Spinner from '../Spinner/Spinner';
import ErrorBox from '../ErrorBox/ErrorBox';

const TicketsList = ({
  ticketsList = [],
  ticketsLoadingFinished,
  searchIdisErrored,
  sortingBy,
  selectedFilters,
  fetchRefreshHandler }) => {
  const loader = !ticketsLoadingFinished && !searchIdisErrored? <Spinner /> : null;
  const errorBox = searchIdisErrored ? <ErrorBox
    message="Что-то пошло не так"
    textButton="Повторить запрос"
    url="https://front-test.beta.aviasales.ru/"
    onRefresh={fetchRefreshHandler} /> : null;

  const filtersMap = {
    without: 0,
    one: 1,
    two: 2,
    three: 3,
  }

  const list = ticketsList.filter(
    ({ segments }) => {
      const { stops } = segments[0];
      return stops.length === filtersMap[selectedFilters[0]]
      || stops.length === filtersMap[selectedFilters[1]]
      || stops.length === filtersMap[selectedFilters[2]]
      || stops.length === filtersMap[selectedFilters[3]]
    })
    .sort((a, b) =>
    sortingBy === 'price' ? a.price - b.price : a.segments[0].duration - b.segments[0].duration
  ).map(({price, carrier, segments}) => {
    return <li className={classes["tickets-list__item"]} key={JSON.stringify(segments[0])}>
              <TicketItem
                price={price}
                carrier={carrier}
                segments={segments}/>
            </li>
  })

  return (
    <ul className={classes["tickets-list"]}>
      {loader}
      {errorBox}
      {list.length === 0 && ticketsLoadingFinished && !searchIdisErrored ? <h1>Рейсов, подходящих под заданные фильтры, не найдено</h1> : list}
    </ul>
  );
}

export default TicketsList;
