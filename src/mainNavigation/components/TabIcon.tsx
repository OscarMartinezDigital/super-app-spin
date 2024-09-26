import React from 'react';
import {Image} from 'react-native';

type TabIconProps = {
  color: string;
  size: number;
  routeName: string;
};

export default function TabIcon({color, size, routeName}: TabIconProps) {
  let iconName;

  if (routeName === 'Home') {
    iconName = require('../../assets/icons/icon-home.png');
  } else if (routeName === 'Benefits') {
    iconName = require('../../assets/icons/icon-benefits.png');
  } else if (routeName === 'Wallet') {
    iconName = require('../../assets/icons/icon-wallet.png');
  } else if (routeName === 'Account') {
    iconName = require('../../assets/icons/icon-account.png');
  }

  return (
    <Image
      source={iconName}
      style={{
        width: size,
        height: size,
        tintColor: color,
      }}
    />
  );
}
