import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../../components/Text/Text';

type TabHeaderProps = {
  routeName: string;
};

const Names: {[key: string]: string} = {
  Benefits: 'Beneficios',
  Wallet: 'Cartera',
  Account: 'Cuenta',
};

export default function TabHeader({routeName}: TabHeaderProps) {
  return (
    <View style={styles.container}>
      <Text variant="headline-small">{Names[routeName]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingLeft: 16,
    height: 64,
  },
});
