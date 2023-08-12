import React from 'react';
import Cards from '../../../../src/screens/BenefitsScreen/components/Cards';
import {render, fireEvent} from '@testing-library/react-native';

describe('Cards', () => {
  it('should render two cards', () => {
    const historyPress = jest.fn();
    const redeemPress = jest.fn();
    const {getByTestId, getByText} = render(
      <Cards onHistoryPress={historyPress} onRedeemPress={redeemPress} />,
    );

    const card1 = getByTestId('card-1');
    const card2 = getByTestId('card-2');
    expect(card1).toBeTruthy();
    expect(card2).toBeTruthy();
  });

  it('should call the onPress handler when the card is pressed', () => {
    const historyPress = jest.fn();
    const redeemPress = jest.fn();
    const {getByTestId} = render(
      <Cards onHistoryPress={historyPress} onRedeemPress={redeemPress} />,
    );

    const card1 = getByTestId('card-1');
    fireEvent.press(card1);

    expect(historyPress).toHaveBeenCalled();

    const card2 = getByTestId('card-2');
    fireEvent.press(card2);

    expect(redeemPress).toHaveBeenCalled();
  });
});
