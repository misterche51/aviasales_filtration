import {
  SET_SORT_TYPE,
  SET_FILTER_ALL,
  SET_FILTER_ID
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