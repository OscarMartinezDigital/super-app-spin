import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {StackHeaderProps} from '@react-navigation/stack';
import Text from '../../components/Text/Text';

const Names: {[key: string]: string} = {
  Movements: 'Movimientos',
  TransactionDetail: 'Detalle del movimientos',
  ChangePointsStepOne: 'Cambia tus puntos',
  ChangePointsStepTwo: 'Cambia tus puntos',
};

export default function StackHeader({
  route,
  navigation,
  back,
}: StackHeaderProps) {
  return (
    <View style={styles.container}>
      {back ? (
        <TouchableOpacity
          style={styles.backContainer}
          onPress={navigation.goBack}>
          <Image
            style={styles.backImage}
            source={require('../../assets/back-icon.png')}
          />
        </TouchableOpacity>
      ) : undefined}
      <Text variant="headline-small">{Names[route.name]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingLeft: 16,
    height: 64,
    alignItems: 'center',
  },
  backContainer: {
    alignItems: 'center',
    width: 48,
    height: 64,
  },
  backImage: {
    width: 24,
    height: 24,
    marginTop: 18,
  },
});
