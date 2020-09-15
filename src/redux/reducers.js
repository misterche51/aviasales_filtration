import {
  SET_SORT_TYPE,
  SET_FILTER_ALL,
  SET_FILTER_ID,
  GETTING_ID,
  GETTING_ID_ERRORED,
  GETTING_ID_COMPLETED,
  TICKETS_IS_LOADING,
  TICKETS_HAS_ERRORED,
  TICKETS_FETCH_SUCCESS,
} from './actionTypes';


const initiaFetchTicketsState = {
  searchIdisGetting: false,
  searchIdisErrored: false,
  ticketsIsLoading: false,
  ticketsHasErrored: false,
  ticketsLoadingFinished: false,
  ticketsList: [],
};

export function fetchTicketsReducer(state = initiaFetchTicketsState, {type, payload}) {
  switch (type) {
    case GETTING_ID:
      return {
        ...state,
        searchIdisGetting: true,
        searchIdisErrored: false,
      };
    case GETTING_ID_COMPLETED:
      return {
        ...state,
        searchIdisGetting: false,
        searchIdisErrored: false,
      };
    case GETTING_ID_ERRORED:
      return {
        ...state,
        searchIdisGetting: false,
        searchIdisErrored: true,
      };
    case TICKETS_IS_LOADING:
      return {
        ...state,
        ticketsIsLoading: true,
        ticketsHasErrored: false,
      };
    case TICKETS_FETCH_SUCCESS:
      return {
        ...state,
        ticketsList: payload,
        ticketsIsLoading: false,
        ticketsHasErrored: false,
        ticketsLoadingFinished: true,
      };
    case TICKETS_HAS_ERRORED:
      return {
        ...state,
        ticketsIsLoading: false,
        ticketsHasErrored: true,
      };
    default:
      return state;
  }
}


const initialSortingState = { sortingBy: "price" };
export function sortingTicketsReducer(state = initialSortingState, {type, payload}) {
  switch (type) {
    case SET_SORT_TYPE:
      return { sortingBy: payload};
    default:
      return state;
  }
}

const initialFiltrationState = {
  selectedFilters: [],
  isAllChecked: false
};


export function filterTicketsReducer(state = initialFiltrationState, {type, payload}) {
  const { isAllChecked, selectedFilters } = state;
  const allFilters = ['without', 'one', 'two', 'three'];
  const allFiltersLength = allFilters.length;
  switch (type) {
    case SET_FILTER_ALL:
      let updatedState = isAllChecked ? [] : allFilters;
      return {
        ...state,
        selectedFilters: updatedState,
        isAllChecked: !isAllChecked
      }
    case SET_FILTER_ID:
      const idx = selectedFilters.findIndex(id => id === payload);
      const newState = idx === -1 ? [...selectedFilters, payload] : [...selectedFilters.filter(item => item !== payload)];
      return {...state,
        selectedFilters: newState,
        isAllChecked: newState.length === allFiltersLength ? true : false,
      }
    default:
      return state;
  }
}