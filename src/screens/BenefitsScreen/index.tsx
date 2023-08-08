import React from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';
import ThemeProvider from '../../theme/ThemeProvider';
import Header from './components/Header';
import Cards from './components/Cards';
import Benefits from './components/Benefits';
import BannerBottom from './components/BannerBottom';

const BenefitsScreen = () => {
  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollVContainer}>
          <Header />
          <Cards
            onHistoryPress={() => console.log('Navigate to history')}
            onRedeemPress={() => console.log('Navigate to redeem')}
          />
          <Benefits />
          <BannerBottom />
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  scrollVContainer: {
    paddingHorizontal: 16,
  },
});

export default BenefitsScreen;
