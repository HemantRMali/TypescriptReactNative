// __tests__/ScreenTitle-test.js
import React from 'react';
import ScreenTitle from '../../src/components/ScreenTitle/ScreenTitle';
import {render} from '@testing-library/react-native';

describe('ScreenTitle', () => {
  it('renders properly', () => {
    const {toJSON} = render(<ScreenTitle title="Test Title" />);

    expect(toJSON()).toMatchSnapshot();
  });
});
