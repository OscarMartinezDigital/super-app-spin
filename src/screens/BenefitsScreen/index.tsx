import React from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';
import ThemeProvider from '../../theme/ThemeProvider';
import {Card} from '../../index';
import Header from './components/Header';
import Benefits from './components/Benefits';
import BannerBottom from './components/BannerBottom';

const BenefitsScreen = () => {
  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollVContainer}>
          <Header />

          <View style={styles.cardContainer}>
            <Card
              variant="home-card"
              imageHomeCard={require('../../assets/consulta-historial.png')}
              cardTitle="Consulta tu historial"
              imageHomeCardStyles={styles.cardImage}
              onPress={() => console.log('Navigate to history')}
            />
            <Card
              variant="home-card"
              imageHomeCard={require('../../assets/cambia-puntos.png')}
              cardTitle="Cambia tus puntos"
              imageHomeCardStyles={styles.cardImage}
              onPress={() => console.log('Navigate to redeem')}
            />
          </View>

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
  cardContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  cardImage: {
    width: 125,
    height: 125,
  },
});

export default BenefitsScreen;
