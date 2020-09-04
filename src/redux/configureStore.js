import { createStore, combineReducers} from 'redux';
import { sortingTicketsReducer, filterTicketsReducer } from './reducers';

const reducer = combineReducers(
  {
    sortingTicketsReducer,
    filterTicketsReducer
  }
);

export default function configureStore(initialState) {
    return createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        initialState,
        // applyMiddleware(thunk, logger)
    );
}