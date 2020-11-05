/**
 * Filename: Root Reducer index.js
 *
 */

import {combineReducers} from 'redux';

// Imports: Reducers here

import UserReducer from '../screens/Welcome/reducer';
// Redux: Root Reducer
const appReducer = combineReducers({
  UserReducer,
});

export type RootState = ReturnType<typeof appReducer>;

export default (state: RootState, action: any) => appReducer(state, action);
