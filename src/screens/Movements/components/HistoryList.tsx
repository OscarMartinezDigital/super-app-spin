import React from 'react';
import {SectionList, Text, View, StyleSheet} from 'react-native';
import TransactionItem from './TransactionItem';
import {TransactionSection} from '../../../types';

type HistoryListProps = {
  listBySections: TransactionSection[];
};

export default function HistoryList({listBySections}: HistoryListProps) {
  return (
    <SectionList
      showsVerticalScrollIndicator={false}
      sections={listBySections}
      keyExtractor={item => `${item.id}`}
      renderItem={({item}) => <TransactionItem {...item} />}
      renderSectionHeader={({section: {title}}) => (
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{title}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.28,
    color: '#05053D',
    marginVertical: 16,
  },
});
