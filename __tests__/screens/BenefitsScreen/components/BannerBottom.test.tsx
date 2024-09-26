import React from 'react';
import {render} from '@testing-library/react-native';
import BannerBottom from '../../../../src/screens/BenefitsScreen/components/BannerBottom';

describe('BannerBottom', () => {
  it('should render two images', () => {
    const {getByTestId} = render(<BannerBottom />);

    expect(getByTestId('image-1')).toBeTruthy();
    expect(getByTestId('image-2')).toBeTruthy();
  });
});
