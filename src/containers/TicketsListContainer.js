import { connect } from 'react-redux';
import TicketsList from '../components/TicketsList/TicketsList';

const mapStateToProps = (state) => {
  const { ticketsList, ticketsLoadingFinished } = state.fetchTicketsReducer;
  return {
    ticketsList,
    ticketsLoadingFinished
  };
};

export default connect(mapStateToProps)(TicketsList);