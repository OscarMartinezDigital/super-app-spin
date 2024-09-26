import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../../components/Text/Text';

const WalletScreen = () => {
  return (
    <View style={styles.container}>
      <Text variant="headline-small">Pantalla Cartera</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WalletScreen;
