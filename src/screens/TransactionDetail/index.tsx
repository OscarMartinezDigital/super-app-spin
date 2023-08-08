import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './components/Header';
import Details from './components/Details';
import Transaction from './components/Transaction';
import {TransactionDetailProps} from '../../mainNavigation/types';

const fakeItem = {
  entity: 'Oxxo Gas',
  date: 'Sun Aug 06 2023',
  points: 100,
  operation: 'earned',
  transactionNo: '5dced89c-2b6e-4a1c-a715-c19b0a51',
  id: 1,
};

export default function TransactionDetailScreen({
  route,
}: TransactionDetailProps) {
  const {id} = route.params;
  // const {getItemById} = useHistoryTransaction();
  // const item = getItemById(id);

  return (
    <View style={styles.container}>
      <Header
        entityName={fakeItem.entity}
        points={fakeItem.points}
        operation={fakeItem.operation}
      />
      <Details points={fakeItem.points} date={fakeItem.date} />
      <Transaction transactionId={fakeItem.transactionNo} />
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
