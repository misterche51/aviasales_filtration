import { connect } from 'react-redux';
import TicketsList from '../components/TicketsList/TicketsList';
import { fetchSearchId } from '../redux/actions';

const mapStateToProps = (state) => {
  const { ticketsList, ticketsLoadingFinished, searchIdisErrored } = state.fetchTicketsReducer;
  const { sortingBy } = state.sortingTicketsReducer;
  const { selectedFilters } = state.filterTicketsReducer;

  return {
    ticketsList,
    ticketsLoadingFinished,
    searchIdisErrored,
    sortingBy,
    selectedFilters
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      fetchRefreshHandler: (url) => dispatch(fetchSearchId(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketsList);