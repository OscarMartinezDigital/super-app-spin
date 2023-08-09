import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StackParamList, TabParamList} from './types';
import HomeScreen from '../screens/HomeScreen';
import BenefitsScreen from '../screens/BenefitsScreen';
import WalletScreen from '../screens/WalletScreen';
import AccountScreen from '../screens/AccountScreen';
import MovementsScreen from '../screens/Movements';
import TransactionDetailScreen from '../screens/TransactionDetail';
import ChangePoints from '../screens/ChangePoints';
import TabIcon from './components/TabIcon';
import TabBarLabel from './components/TabBarLabel';

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
        tabBarIcon: ({color, size}) => (
          <TabIcon color={color} size={size} routeName={route.name} />
        ),
        tabBarLabel: ({focused}) => (
          <TabBarLabel focused={focused} routeName={route.name} />
        ),
        tabBarStyle: {
          height: 76,
        },
        tabBarItemStyle: {
          paddingVertical: 12,
        },
        tabBarActiveTintColor: '#05053D',
        tabBarInactiveTintColor: '#69698B',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Benefits" component={BenefitsScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default MainStackNavigation;
