// __tests__/DefaultTextInput-test.js
import React from 'react';
import renderer from 'react-test-renderer';
import DefaultTextInput from '../../src/components/DefaultTextInput';

test('DefaultTextInput renders correctly', () => {
  const mock = jest.fn();

  const tree = renderer
    .create(
      <DefaultTextInput
        label="Test Label"
        value="Test Value"
        onChangeText={mock}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
