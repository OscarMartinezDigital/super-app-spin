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
import {LOGOS} from '../../../styles/LogosObj/logos';

interface ItemProps extends Transaction {}

export default function TransactionItem({
  id,
  entity,
  date,
  points,
  operation,
  transactionNo,
}: ItemProps) {
  const navigation = useNavigation<NavigationProps>();

  let newDate = new Date(date);
  let dayArr = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];

  let day = dayArr[newDate.getDay()];
  let month = newDate.getDate();
  let dateFormatted = day + ' ' + month;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('TransactionDetail', {
          id,
          entity,
          date,
          points,
          operation,
          transactionNo,
        })
      }>
      <View style={styles.container}>
        <Image source={LOGOS[entity]} style={styles.image} />
        <View style={styles.centerContainer}>
          <Text style={styles.title}>{entity}</Text>
          <Divider height={4} />
          <Text style={styles.date}>{dateFormatted}</Text>
        </View>
        <Text style={styles.points}>
          {operation === 'earned' ? `+ ${points}` : `- ${points}`}
        </Text>
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
    fontFamily: 'Inter-Medium',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: -0.32,
    color: '#05053D',
  },
  date: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.28,
    color: '#373764',
  },
  points: {
    color: '#373764',
    fontFamily: 'Inter-Bold',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: -0.28,
  },
});
