import React from 'react';
import classes from "./TicketItem.module.scss";
import CompanyLogo from './S7 Logo.png';

const TicketItem = () => {
  return (
    <div className={classes.ticket}>
      <div className={classes.ticket__header}>
        <p className={classes.ticket__price}>13 400 р</p>
        <div className={classes.ticket__company}>
          <img src={CompanyLogo}  width="110" height="36" alt="Билет от эссевен"/>
        </div>
      </div>
      <div className={classes.ticket__info}>
        <span className={classes.ticket__point}>
          <p className={classes["ticket__info-title"]}>MOW – HKT</p>
          <p className={classes["ticket__info-data"]}>10:45 – 08:00</p>
        </span>
        <span className={classes.ticket__point}>
          <p className={classes["ticket__info-title"]}>MOW – HKT</p>
          <p className={classes["ticket__info-data"]}>10:45 – 08:00</p>
        </span>
        <span className={classes.ticket__point}>
          <p className={classes["ticket__info-title"]}>MOW – HKT</p>
          <p className={classes["ticket__info-data"]}>10:45 – 08:00</p>
        </span>
      </div>
      <div className={classes.ticket__info}>
        <span className={classes.ticket__point}>
          <p className={classes["ticket__info-title"]}>MOW – HKT</p>
          <p className={classes["ticket__info-data"]}>10:45 – 08:00</p>
        </span>
        <span className={classes.ticket__point}>
          <p className={classes["ticket__info-title"]}>MOW – HKT</p>
          <p className={classes["ticket__info-data"]}>10:45 – 08:00</p>
        </span>
        <span className={classes.ticket__point}>
          <p className={classes["ticket__info-title"]}>MOW – HKT</p>
          <p className={classes["ticket__info-data"]}>10:45 – 08:00</p>
        </span>
      </div>
    </div>
  );
}

export default TicketItem;
