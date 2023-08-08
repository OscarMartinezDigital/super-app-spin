import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './src/mainNavigation';
import ThemeProvider from './src/theme/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
