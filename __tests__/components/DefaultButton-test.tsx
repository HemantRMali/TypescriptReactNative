// __tests__/DefaultButton-test.js
import React from 'react';
import renderer from 'react-test-renderer';
import DefaultButton from '../../src/components/DefaultButton';

test('DefaultButton renders correctly', () => {
  const tree = renderer.create(<DefaultButton title="Test Title" />).toJSON();
  expect(tree).toMatchSnapshot();
});
