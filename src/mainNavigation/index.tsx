import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StackParamList, TabParamList} from './types';
import HomeScreen from '../screens/HomeScreen';
import BenefitsScreen from '../screens/BenefitsScreen';
import WalletScreen from '../screens/WalletScreen';
import AccountScreen from '../screens/AccountScreen';
import Movements from '../screens/Movements';
import ChangePoints from '../screens/ChangePoints';
import {Image} from 'react-native';
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
        <Stack.Screen name="Movements" component={Movements} />
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

export default MainStackNavigation;
