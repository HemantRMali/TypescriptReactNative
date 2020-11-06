// __tests__/Welcome-test.js
import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import Welcome from '../../src/screens/Welcome';
import store from '../../src/store/configure-store';

test('Welcome renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Welcome />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
