// __tests__/ButtonVariation-test.js
import React from 'react';
import ButtonVariation from '../../../src/screens/ButtonVariation';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import store from '../../../src/store/configure-store';

describe('ButtonVariation', () => {
  it('renders properly', () => {
    const {toJSON} = render(
      <Provider store={store}>
        <ButtonVariation />
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
