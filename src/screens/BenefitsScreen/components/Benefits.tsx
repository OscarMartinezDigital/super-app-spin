import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Text from '../../../components/Text/Text';
import Divider from '../../../components/Divider';

export default function Benefits() {
  return (
    <View>
      <View style={styles.benefitContainer}>
        <Text variant="headline-small">Acumula productos</Text>
        <Divider height={12} />
        <Text variant="default-body">
          Muy pronto podrás sumar tus compras y ganar productos de regalo
        </Text>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../assets/acumula-puntos.png')}
            style={styles.image}
          />
        </View>
      </View>

      <View style={styles.benefitContainer}>
        <Text variant="headline-small">Gana más puntos</Text>
        <Divider height={12} />
        <Text variant="default-body">
          Muy pronto podrás ganar más puntos en el total de tu compra
        </Text>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../assets/gana-mas-puntos.png')}
            style={styles.image}
          />
        </View>
      </View>

      <View style={styles.benefitContainer}>
        <Text variant="headline-small">Suma al comprar</Text>
        <Divider height={12} />
        <Text variant="default-body">
          Muy pronto podrás acumular compras y llevarte productos de regalo
        </Text>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../assets/recompensas.png')}
            style={styles.image}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  benefitContainer: {
    marginTop: 24,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});
