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
import ChangePointsStepOne from '../screens/ChangePoints/StepOne';
import ChangePointsStepTwo from '../screens/ChangePoints/StepTwo';
import ChangePointsStepThree from '../screens/ChangePoints/StepThree';
import TabIcon from './components/TabIcon';
import TabBarLabel from './components/TabBarLabel';
import TabHeader from './components/TabHeader';
import StackHeader from './components/StackHeader';

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createStackNavigator<StackParamList>();

const MainStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: props => <StackHeader {...props} />,
        }}>
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
        <Stack.Screen
          name="ChangePointsStepOne"
          component={ChangePointsStepOne}
        />
        <Stack.Screen
          name="ChangePointsStepTwo"
          component={ChangePointsStepTwo}
        />
        <Stack.Screen
          name="ChangePointsStepThree"
          component={ChangePointsStepThree}
          options={{headerShown: false}}
        />
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
        header: ({route}) => <TabHeader routeName={route.name} />,
        tabBarStyle: {
          height: 76,
        },
        tabBarItemStyle: {
          paddingVertical: 12,
        },
        tabBarActiveTintColor: '#05053D',
        tabBarInactiveTintColor: '#69698B',
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Benefits" component={BenefitsScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default MainStackNavigation;
