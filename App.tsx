import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import MainStackNavigation from './src/mainNavigation';
import ThemeProvider from './src/theme/ThemeProvider';
import {TransactionProvider} from './src/contexts/TransactionContext';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaView style={{flex: 1}}>
        <TransactionProvider>
          <MainStackNavigation />
        </TransactionProvider>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
