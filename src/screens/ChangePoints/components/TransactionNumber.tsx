import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type TransactioNumberProps = {
  number: string;
};

export default function TransactioNumber({number}: TransactioNumberProps) {
  return (
    <View style={styles.container}>
      <Text style={[styles.baseText, styles.transactionText]}>
        Número de transacción
      </Text>
      <Text style={[styles.baseText, styles.transactionId]}>{number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#E6E6EC',
    padding: 16,
    gap: 8,
  },
  baseText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: -0.32,
  },
  transactionText: {
    color: '#05053D',
  },
  transactionId: {
    color: '#69698B',
  },
});
