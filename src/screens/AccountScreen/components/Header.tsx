import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Text from '../../../components/Text/Text';
import Tag from '../../../components/atoms/Tag';
import Divider from '../../../components/Divider';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text variant="headline-large">Maria Florencia</Text>
        <Divider height={12} />
        <Tag
          leftIcon={require('../../../assets/starburst.png')}
          variant="points"
          text="1,200 puntos"
          size="large"
        />
      </View>
      <Image
        style={styles.image}
        source={require('../../../assets/globe-icon-new.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  nameContainer: {
    paddingVertical: 16,
    marginBottom: 16,
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
  },
});
