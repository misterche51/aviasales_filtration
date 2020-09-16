import React from 'react';
import classes from "./TicketItem.module.scss";
import {
  getConvertedDuration,
  getFormattedTime,
  generateStopsTitle,
  generateStopsList,
  getFormattedPrice
} from "./helpers/helpers";

const TicketItem = ({ price, carrier, segments }) => {
  const [from, away] = segments;

  const formattedPrice = getFormattedPrice(price);

  const durationFrom = getConvertedDuration(from.duration);
  const durationAway = getConvertedDuration(away.duration);

  const stopsTitleFrom = generateStopsTitle(from.stops);
  const stopsTitleAway = generateStopsTitle(away.stops);

  const flightStartTimeFrom = getFormattedTime(from);
  const flightStartTimeAway = getFormattedTime(away);

  const stopsListFrom = generateStopsList(from.stops);
  const stopsListAway = generateStopsList(away.stops);

  return (
    <div className={classes.ticket}>
      <div className={classes.ticket__header}>
        <p className={classes.ticket__price}>{formattedPrice}</p>
        <div className={classes.ticket__company}>
          <img src={`http://pics.avs.io/99/36/${carrier}.png`}  width="110" height="36" alt={`Билет от ${carrier}`}/>
        </div>
      </div>
      <div className={classes.ticket__info}>
        <span className={classes.ticket__point}>
          <p className={classes["ticket__info-title"]}>{`${from.origin} - ${from.destination}`}</p>
          <p className={classes["ticket__info-data"]}>{flightStartTimeFrom}</p>
        </span>
        <span className={classes.ticket__point}>
          <p className={classes["ticket__info-title"]}>В пути</p>
          <p className={classes["ticket__info-data"]}>{durationFrom}</p>
        </span>
        <span className={classes.ticket__point}>
          <p className={classes["ticket__info-title"]}>{stopsTitleFrom}</p>
          <p className={classes["ticket__info-data"]}>{stopsListFrom}</p>
        </span>
      </div>
      <div className={classes.ticket__info}>
        <span className={classes.ticket__point}>
          <p className={classes["ticket__info-title"]}>{`${away.origin} - ${away.destination}`}</p>
          <p className={classes["ticket__info-data"]}>{flightStartTimeAway}</p>
        </span>
        <span className={classes.ticket__point}>
          <p className={classes["ticket__info-title"]}>В пути</p>
          <p className={classes["ticket__info-data"]}>{durationAway}</p>
        </span>
        <span className={classes.ticket__point}>
          <p className={classes["ticket__info-title"]}>{stopsTitleAway}</p>
          <p className={classes["ticket__info-data"]}>{stopsListAway}</p>
        </span>
      </div>
    </div>
  );
}

export default TicketItem;
