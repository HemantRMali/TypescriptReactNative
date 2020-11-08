import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
// Imports: Redux Root Reducer
import appReducer from '../reducers';

// Redux: Store
const store = createStore(appReducer, applyMiddleware(createLogger()));

// Exports
export default store;
