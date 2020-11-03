/**
 * Filename: Welcome reducer.js
 *
 */

/**
 * Constants
 */
import {UserActions} from './constants';
import {UserState} from '../../store/types';
import {UserActionTypes} from './actions';

// Initial State

const initialState: UserState = {
  user: {name: ''},
};

// Redux: UserReducer
const UserReducer = (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case UserActions.SAVE_USER:
      return {
        ...state,
        user: action.payload,
      };

    default: {
      return state;
    }
  }
};

// Exports
export default UserReducer;
