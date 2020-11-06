// __tests__/ButtonVariation-test.js
import React from 'react';
import renderer from 'react-test-renderer';
import ButtonVariation from '../../../src/screens/ButtonVariation';

test('ButtonVariation renders correctly', () => {
  const tree = renderer.create(<ButtonVariation />).toJSON();
  expect(tree).toMatchSnapshot();
});
