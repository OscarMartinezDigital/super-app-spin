import React from 'react';
import {Image, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StackParamList, TabParamList} from './types';
import HomeScreen from '../screens/HomeScreen';
import BenefitsScreen from '../screens/BenefitsScreen';
import WalletScreen from '../screens/WalletScreen';
import AccountScreen from '../screens/AccountScreen';
import MovementsScreen from '../screens/Movements';
import TransactionDetailScreen from '../screens/TransactionDetail';
import ChangePoints from '../screens/ChangePoints';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createStackNavigator<StackParamList>();

const MainStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="MainTabs"
          component={MainTabNavigation}
        />
        <Stack.Screen name="Movements" component={MovementsScreen} />
        <Stack.Screen
          name="TransactionDetail"
          component={TransactionDetailScreen}
        />
        <Stack.Screen name="ChangePoints" component={ChangePoints} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = require('../assets/icons/icon-home.png');
          } else if (route.name === 'Benefits') {
            iconName = require('../assets/icons/icon-benefits.png');
          } else if (route.name === 'Wallet') {
            iconName = require('../assets/icons/icon-wallet.png');
          } else if (route.name === 'Account') {
            iconName = require('../assets/icons/icon-account.png');
          }

          // Aquí se establece el ícono y su color y tamaño
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
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Benefits" component={BenefitsScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default MainStackNavigation;
