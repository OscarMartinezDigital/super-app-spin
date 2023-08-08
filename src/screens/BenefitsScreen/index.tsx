import React from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ThemeProvider from '../../theme/ThemeProvider';
import Header from './components/Header';
import Cards from './components/Cards';
import Benefits from './components/Benefits';
import BannerBottom from './components/BannerBottom';
import {NavigationProps} from '../../mainNavigation/types';

const BenefitsScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollVContainer}>
          <Header />
          <Cards
            onHistoryPress={() => navigation.navigate('Movements')}
            onRedeemPress={() => navigation.navigate('ChangePoints')}
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
