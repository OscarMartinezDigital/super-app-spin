import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import ThemeProvider from './src/theme/ThemeProvider';
import {Button} from './src';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaView>
        <Button text="Hola Mundo" onPress={() => console.log('spin')} />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
