import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type TransactionProps = {
  transactionId: string;
};

export default function Transaction({transactionId}: TransactionProps) {
  return (
    <View style={styles.transactionContainer}>
      <Text style={[styles.baseText, styles.transactionText]}>
        Número de transacción
      </Text>
      <Text style={[styles.baseText, styles.transactionId]}>
        {transactionId}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  baseText: {
    color: '#373764',
    fontFamily: 'Inter',
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: -0.32,
  },
  transactionContainer: {
    marginVertical: 16,
  },
  transactionText: {
    color: '#05053D',
    fontWeight: '400',
  },
  transactionId: {
    color: '#69698B',
    fontWeight: '400',
    marginTop: 8,
  },
});
