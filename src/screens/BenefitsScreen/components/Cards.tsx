import React from 'react';
import {StyleSheet, View} from 'react-native';
import Card from '../../../components/Card/Card';

type CardsProps = {
  onHistoryPress: () => void;
  onRedeemPress: () => void;
};

export default function Cards({onHistoryPress, onRedeemPress}: CardsProps) {
  return (
    <View style={styles.cardContainer}>
      <Card
        variant="home-card"
        imageHomeCard={require('../../../assets/consulta-historial.png')}
        cardTitle="Consulta tu historial"
        imageHomeCardStyles={styles.cardImage}
        onPress={onHistoryPress}
      />
      <Card
        variant="home-card"
        imageHomeCard={require('../../../assets/cambia-puntos.png')}
        cardTitle="Cambia tus puntos"
        imageHomeCardStyles={styles.cardImage}
        onPress={onRedeemPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  cardImage: {
    width: 125,
    height: 125,
  },
});
