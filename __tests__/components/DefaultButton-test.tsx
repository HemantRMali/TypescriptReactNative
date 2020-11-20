// __tests__/DefaultButton-test.js
import React from 'react';
import DefaultButton from '../../src/components/DefaultButton/DefaultButton';

import {render, fireEvent} from '@testing-library/react-native';

describe('DefaultButton', () => {
  it('renders properly', () => {
    const onPressHandler = jest.fn();
    const {toJSON, getByTestId} = render(
      <DefaultButton
        testId={'default-button'}
        title="Test Title"
        onPress={onPressHandler}
      />,
    );

    fireEvent.press(getByTestId('default-button'));
    expect(toJSON()).toMatchSnapshot();
  });
});
