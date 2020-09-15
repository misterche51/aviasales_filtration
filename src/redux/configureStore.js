import { createStore, combineReducers, applyMiddleware} from 'redux';
import { sortingTicketsReducer, filterTicketsReducer, fetchTicketsReducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reducer = combineReducers(
  {
    sortingTicketsReducer,
    filterTicketsReducer,
    fetchTicketsReducer
  }
);

export default function configureStore(initialState) {
    return createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk))
    );
}