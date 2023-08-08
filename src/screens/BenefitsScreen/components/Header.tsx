import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Text, Tag} from '../../../index';
import Divider from '../../../components/Divider';

export default function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text variant="small-body-bold">Tienes</Text>
        <Text variant="headline-large">10,657 puntos</Text>
        <Divider height={8} />
        <Tag
          leftIcon={require('../../../assets/starburst.png')}
          variant="points"
          text="Valen $156.00"
          size="large"
        />
      </View>
      <Image
        source={require('../../../assets/spin-premia.png')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 16,
    justifyContent: 'space-between',
  },
  image: {
    width: 120,
    height: 120,
  },
});
