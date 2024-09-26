import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type DetailsProps = {
  points: number;
  date: string;
};

export default function Details({points, date}: DetailsProps) {
  let getDate = new Date(date);
  let day = getDate.getDate();
  let month = getDate.getMonth() + 1;
  let month2 = getDate.getMonth() + 2;
  let year = getDate.getFullYear();
  let dateFormatted = day + '/' + month + '/' + year;
  let dateFormattedAndMonth = day + '/' + month2 + '/' + year;

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={[styles.baseText, styles.itemKey]}>Puntos cambiados:</Text>
        <Text style={[styles.baseText, styles.itemValue]}>{points}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={[styles.baseText, styles.itemKey]}>Valen:</Text>
        <Text style={[styles.baseText, styles.itemValue]}>${points / 10}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={[styles.baseText, styles.itemKey]}>Fecha:</Text>
        <Text style={[styles.baseText, styles.itemValue]}>{dateFormatted}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={[styles.baseText, styles.itemKey]}>Válido hasta el:</Text>
        <Text style={[styles.baseText, styles.itemValue]}>
          {dateFormattedAndMonth}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#E6E6EC',
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 32,
  },
  baseText: {
    color: '#373764',
    fontFamily: 'Inter',
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: -0.32,
  },
  itemKey: {
    fontWeight: '400',
  },
  itemValue: {
    fontFamily: 'Inter-Bold',
    fontWeight: '600',
  },
});
