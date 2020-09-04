import {
  SET_SORT_TYPE,
  SET_FILTRATION_ALL,
  SET_FILTRATION_WITHOUT,
  SET_FILTRATION_ONE_TRANSFER,
  SET_FILTRATION_TWO_TRANSFER,
  SET_FILTRATION_THREE_TRANSFER,
  SET_FILTRATION_NOT_ALL,
} from './actionTypes';

// генераторы экшенов
export function toggleSortingType(payload) {
  return {
    type: SET_SORT_TYPE,
    payload
  }
};

export function changeFiltrationToAll(payload) {
  return {
    type: SET_FILTRATION_ALL,
    payload,
  }
};

export function changeFiltrationToWithout(payload) {
  return {
    type: SET_FILTRATION_WITHOUT,
    payload,
  }
};

export function changeFiltrationToOneTransfer(payload) {
  return {
    type: SET_FILTRATION_ONE_TRANSFER,
    payload
  }
};

export function changeFiltrationToTwoTransfer(payload) {
  return {
    type: SET_FILTRATION_TWO_TRANSFER,
    payload,
  }
};

export function changeFiltrationToThreeTransfer(payload) {
  return {
    type: SET_FILTRATION_THREE_TRANSFER,
    payload,
  }
};


export function changeFiltrationToNotAll() {
  return {
    type: SET_FILTRATION_NOT_ALL,
  }
};