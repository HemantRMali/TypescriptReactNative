/**
 * Filename: Root Reducer index.js
 *
 */

import {CombinedState, combineReducers} from 'redux';

// Imports: Reducers here

import UserReducer from '../screens/Welcome/reducer';
import {UserState} from '../store/types';
// Redux: Root Reducer
const appReducer = combineReducers({
  UserReducer,
});

//export default appReducer;

export type RootState = ReturnType<typeof appReducer>;

export default (state: RootState | undefined, action: any) =>
  appReducer(state, action);
