import {
  SET_SORT_TYPE,
  SET_FILTER_ALL,
  SET_FILTER_ID,
  GETTING_ID,
  GETTING_ID_COMPLETED,
  GETTING_ID_ERRORED,
  TICKETS_IS_LOADING,
  TICKETS_HAS_ERRORED,
  TICKETS_FETCH_SUCCESS
} from './actionTypes';

// генераторы экшенов

export function ticketsIsLoading(payload) {
  return {
    type: TICKETS_IS_LOADING,
    payload
  }
}

export function ticketsHasErrored() {
  return {
    type: TICKETS_HAS_ERRORED
  }
}

export function ticketsFetchSuccess(payload) {
  return {
    type: TICKETS_FETCH_SUCCESS,
    payload
  }
}

export function gettingSearchId() {
  return {
    type: GETTING_ID
  }
}

export function gettingSearchIdisErrored() {
  return {
    type: GETTING_ID_ERRORED
  }
}

export function gettingSearchIdisCompleted() {
  return {
    type: GETTING_ID_COMPLETED,
  }
}

export function fetchSearchId(url) {
  return (dispatch) => {
    dispatch(gettingSearchId());
    fetch(`${url}search`)
      .then(response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      // .then(({ searchId }) => dispatch(gettingSearchIdisCompleted(searchId)))
      .then(({ searchId }) =>
        fetch(`${url}tickets?searchId=${searchId}`))
          .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
          })
      .then(response => response.json())
      .then(({tickets, stop}) => dispatch(ticketsFetchSuccess(tickets)))
      // .catch(() => dispatch(gettingSearchIdisErrored()));
  };
}

export function toggleSortingType(payload) {
  return {
    type: SET_SORT_TYPE,
    payload
  }
};

export function setFilterAll(payload) {
  return {
    type: SET_FILTER_ALL,
    payload,
  }
};

export function setFilterId(payload) {
  return {
    type: SET_FILTER_ID,
    payload,
  }
};
