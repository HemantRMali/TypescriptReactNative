// __tests__/ButtonVariation-test.js
import React from 'react';
import ButtonVariation from '../../../src/screens/ButtonVariation';
import {render, fireEvent} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import store from '../../../src/store/configure-store';
import SwipeButton from 'rn-swipe-button';

describe('ButtonVariation', () => {
  it('renders properly', () => {
    const {toJSON, UNSAFE_getByType} = render(
      <Provider store={store}>
        <ButtonVariation />
      </Provider>,
    );

    const sliderButton = UNSAFE_getByType(SwipeButton);
    fireEvent(sliderButton, 'onSwipeSuccess');
    expect(toJSON()).toMatchSnapshot();
  });
});
