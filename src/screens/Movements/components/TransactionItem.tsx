import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Divider from '../../../components/Divider';
import {Transaction} from '../../../types';
import {NavigationProps} from '../../../mainNavigation/types';

type LogoObj = {
  [key: string]: ImageSourcePropType;
};

interface ItemProps extends Transaction {}

export default function TransactionItem({id, entity, date, points}: ItemProps) {
  const navigation = useNavigation<NavigationProps>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('TransactionDetail', {id})}>
      <View style={styles.container}>
        <Image source={LOGOS[entity]} style={styles.image} />
        <View style={styles.centerContainer}>
          <Text style={styles.title}>{entity}</Text>
          <Divider height={4} />
          <Text style={styles.date}>{date}</Text>
        </View>
        <Text style={styles.points}>{`+ ${points}`}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#E6E6EC',
  },
  image: {
    width: 40,
    height: 40,
  },
  centerContainer: {
    flex: 1,
    marginHorizontal: 12,
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: -0.32,
    color: '#05053D',
  },
  date: {
    fontFamily: 'Inter',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.28,
    color: '#373764',
  },
  points: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: -0.28,
  },
});

const LOGOS: LogoObj = {
  'Oxxo Gas': require('../../../assets/logos/oxxo-gas.png'),
  Volaris: require('../../../assets/logos/volaris.png'),
  Oxxo: require('../../../assets/logos/oxxo.png'),
  'Doña Tota': require('../../../assets/logos/tota.png'),
};
