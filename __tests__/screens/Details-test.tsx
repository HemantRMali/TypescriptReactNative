// __tests__/Details-test.js
import React from 'react';
import {Provider} from 'react-redux';
import Details from '../../src/screens/Details';
import store from '../../src/store/configure-store';
import {render} from '@testing-library/react-native';

describe('Details', () => {
  it('renders properly', () => {
    const {toJSON, getByTestId} = render(
      <Provider store={store}>
        <Details />
      </Provider>,
    );

    const textInstance = getByTestId('detail-screen-text');
    expect(textInstance).toBeDefined();
    expect(toJSON()).toMatchSnapshot();
  });
});
