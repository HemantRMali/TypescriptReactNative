import {isValidUser} from '../../src/validations/validations';

describe('Validations', () => {
  it('check user name validation', () => {
    expect(isValidUser('hemant')).toBeTruthy();
    expect(isValidUser('he')).toBeFalsy();
  });
});
