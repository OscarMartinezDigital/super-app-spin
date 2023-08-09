import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Tag from '../../../components/atoms/Tag';
import Text from '../../../components/Text/Text';
import Divider from '../../../components/Divider';

type HeaderProps = {
  points: number;
};

export default function Header({points}: HeaderProps) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.pointsContainer}>
        <Text variant="headline-large">10,200 puntos</Text>
        <Divider width={12} />
        <Image source={require('../../../assets/Alert.png')} />
      </View>
      <Divider height={12} />
      <Tag
        leftIcon={require('../../../assets/starburst.png')}
        variant="points"
        text="Valen $1,200.00"
        size="large"
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
  headerContainer: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#E6E6EC',
    marginBottom: 16,
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
