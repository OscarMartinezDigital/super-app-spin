import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Text from '../../components/Text/Text';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/mobile.png')} />
      <Text variant="headline-small">Pantalla Home</Text>
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
  image: {
    height: 40,
    width: 40,
    marginBottom: 24,
  },
});

export default HomeScreen;
