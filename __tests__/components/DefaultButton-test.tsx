// __tests__/DefaultButton-test.js
import React from 'react';
import DefaultButton from '../../src/components/DefaultButton';

import {render} from '@testing-library/react-native';

describe('DefaultButton', () => {
  it('renders properly', () => {
    const {toJSON} = render(<DefaultButton title="Test Title" />);
    expect(toJSON()).toMatchSnapshot();
  });
});
