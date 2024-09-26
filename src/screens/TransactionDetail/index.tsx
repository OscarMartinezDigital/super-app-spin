import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './components/Header';
import Details from './components/Details';
import Transaction from './components/Transaction';
import {TransactionDetailProps} from '../../mainNavigation/types';

export default function TransactionDetailScreen({
  route,
}: TransactionDetailProps) {
  const {id, entity, date, points, operation, transactionNo} = route.params;
  // const {getItemById} = useHistoryTransaction();
  // const item = getItemById(id);

  return (
    <View style={styles.container}>
      <Header entityName={entity} points={points} operation={operation} />
      <Details points={points} date={date} />
      <Transaction transactionId={transactionNo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
});
