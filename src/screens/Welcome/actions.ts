import {User} from '../../store/types';
import {UserActions} from './constants';
/**
 * This action creator is used store user details.
 */

interface SaveUserDetailsAction {
  type: typeof UserActions.SAVE_USER;
  payload: User;
}

export type UserActionTypes = SaveUserDetailsAction;

// TypeScript infers that this function is returning saveUserDetails
export function saveUserDetails(user: User): UserActionTypes {
  return {
    type: UserActions.SAVE_USER,
    payload: user,
  };
}
