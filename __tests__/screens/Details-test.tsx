// __tests__/Details-test.js
import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import Details from '../../src/screens/Details';
import store from '../../src/store/configure-store';

test('Details renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Details />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
