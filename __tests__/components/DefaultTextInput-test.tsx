// __tests__/DefaultTextInput-test.js

import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import DefaultTextInput from '../../src/components/DefaultTextInput';
describe('DefaultTextInput', () => {
  const onChangeTextMock = jest.fn();

  it('receives some text', () => {
    const {getByTestId, toJSON} = render(
      <DefaultTextInput
        testId="userInput"
        label="Test Label"
        value="Test Value"
        onChangeText={onChangeTextMock}
      />,
    );

    fireEvent.changeText(getByTestId('userInput'), 'Hemant Mali');
    expect(toJSON()).toMatchSnapshot();
  });
});
