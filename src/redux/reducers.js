import {
  SET_SORT_TYPE,
  SET_FILTRATION_ALL,
  SET_FILTRATION_WITHOUT,
  SET_FILTRATION_ONE_TRANSFER,
  SET_FILTRATION_TWO_TRANSFER,
  SET_FILTRATION_THREE_TRANSFER,
  SET_FILTRATION_NOT_ALL
} from './actionTypes';


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
  all: false,
  without: false,
  one: false,
  two: false,
  three: false,
};


export function filterTicketsReducer(state = initialFiltrationState, {type, payload}) {
  switch (type) {
    case SET_FILTRATION_ALL:
      return {
        ...state,
        all: payload,
        without: payload,
        one: payload,
        two: payload,
        three: payload,
      };
    case SET_FILTRATION_WITHOUT:
      return payload === false ? {
        ...state,
        all: false,
        without: payload,
      }
       : { ...state,
        without: payload,};
    case SET_FILTRATION_ONE_TRANSFER:
      return payload === false ? {
        ...state,
        all: false,
        one: payload,
      }
       : {
        ...state,
        one: payload,
      };
    case SET_FILTRATION_TWO_TRANSFER:
      return payload === false ? {
        ...state,
        all: false,
        two: payload,
      }
       : {
        ...state,
        two: payload,
      };
    case SET_FILTRATION_THREE_TRANSFER:
      return payload === false ? {
        ...state,
        all: false,
        three: payload,
      }
       : {
        ...state,
        three: payload,
      };
    case SET_FILTRATION_NOT_ALL:
      return {
        ...state,
        all: false,
      };
    default:
      return state;
  }
}