import {
  SET_SORT_TYPE,
  SET_FILTER_ALL,
  SET_FILTER_ID,
} from './actionTypes';

// генераторы экшенов
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
