import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabParamList} from './types';
import HomeScreen from '../screens/HomeScreen';
import BenefitsScreen from '../screens/BenefitsScreen';
import WalletScreen from '../screens/WalletScreen';
import AccountScreen from '../screens/AccountScreen';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator<TabParamList>();

const MainNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = require('../assets/icons/icon-home.png');
          } else if (route.name === 'Beneficios') {
            iconName = require('../assets/icons/icon-benefits.png');
          } else if (route.name === 'Cartera') {
            iconName = require('../assets/icons/icon-wallet.png');
          } else if (route.name === 'Cuenta') {
            iconName = require('../assets/icons/icon-account.png');
          }

          // Aquí se establece el ícono y su color y tamaño
          return (
            <Image
              source={iconName}
              style={{width: size, height: size, tintColor: color}}
            />
          );
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Beneficios" component={BenefitsScreen} />
      <Tab.Screen name="Cartera" component={WalletScreen} />
      <Tab.Screen name="Cuenta" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigation;
