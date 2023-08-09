import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AllyButton from './components/AllyButton';

export default function ChangePoints() {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        Elige la marca aliada en la que quieres usar tus puntos
      </Text>

      <AllyButton
        imageSource={require('../../assets/logos/volaris.png')}
        onPress={() => {}}
      />
      <AllyButton
        imageSource={require('../../assets/logos/smart-fit.png')}
        onPress={() => {}}
      />
      <AllyButton
        imageSource={require('../../assets/logos/vix.png')}
        onPress={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  description: {
    color: '#05053D',
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: -0.32,
    marginBottom: 16,
  },
});
