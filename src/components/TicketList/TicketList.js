import React from 'react';
import classes from './TicketList.module.scss'
import TicketItem from '../TicketItem/TicketItem';

const TicketList = () => {
  return (
    <ul className={classes["ticket-list"]}>
      <li className={classes["ticket-list__item"]}><TicketItem /></li>
      <li className={classes["ticket-list__item"]}><TicketItem /></li>
      <li className={classes["ticket-list__item"]}><TicketItem /></li>
      <li className={classes["ticket-list__item"]}><TicketItem /></li>
    </ul>
  );
}

export default TicketList;
