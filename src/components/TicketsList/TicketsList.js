import React from 'react';
import classes from './TicketsList.module.scss'
import TicketItem from '../TicketItem/TicketItem';

const TicketsList = ({ ticketsList = [], ticketsLoadingFinished }) => {
  const loader = !ticketsLoadingFinished ? <h1>Загрузка...</h1> : null;
  const list = ticketsList.map(({price, carrier, segments}) => {
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
      {list}
    </ul>
  );
}

export default TicketsList;
