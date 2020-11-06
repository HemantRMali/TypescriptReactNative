// __tests__/ScreenTitle-test.js
import React from 'react';
import renderer from 'react-test-renderer';
import ScreenTitle from '../../src/components/ScreenTitle';

test('ScreenTitle renders correctly', () => {
  const tree = renderer.create(<ScreenTitle title="Test Title" />).toJSON();
  expect(tree).toMatchSnapshot();
});
