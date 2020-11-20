// __tests__/Welcome-test.js
import React from 'react';
import {Provider} from 'react-redux';
import Welcome from '../../../src/screens/Welcome';
import store from '../../../src/store/configure-store';
import {render, fireEvent} from '@testing-library/react-native';
import {Alert} from 'react-native';
describe('Welcome screen', () => {
  const {toJSON, getByTestId, getByPlaceholderText} = render(
    <Provider store={store}>
      <Welcome />
    </Provider>,
  );

  describe('Tapping on continue', () => {
    it('checks the user name', () => {
      const spy = jest.spyOn(Alert, 'alert');
      fireEvent.changeText(getByPlaceholderText('Enter Full Name'), '');
      fireEvent.press(getByTestId('continueButton'));
      expect(spy).toHaveBeenCalledTimes(1);

      fireEvent.changeText(getByTestId('userName'), 'Hemant Mali');
      fireEvent.press(getByTestId('continueButton'));

      expect(getByTestId('userName').props.value.length).toBeGreaterThanOrEqual(
        3,
      );
    });
  });
  expect(toJSON()).toMatchSnapshot();
});
