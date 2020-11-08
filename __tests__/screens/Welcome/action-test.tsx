import * as actions from '../../../src/screens/Welcome/actions';
import {UserActions} from '../../../src/screens/Welcome/constants';

describe('save user action', () => {
  it('should save an user details', () => {
    const userDetails = {name: 'Hemant Mali'};
    const expectedAction = {
      type: UserActions.SAVE_USER,
      payload: userDetails,
    };

    expect(actions.saveUserDetails(userDetails)).toEqual(expectedAction);
  });
});
