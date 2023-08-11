import React from 'react';
import {
  Image,
  Text,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Card from '../../../components/Card/Card';

type CardsProps = {
  onHistoryPress: () => void;
  onRedeemPress: () => void;
};

type CardItemProp = {
  imageSource: ImageSourcePropType;
  title: string;
  onPress: () => void;
};

function CardITem({imageSource, title, onPress}: CardItemProp) {
  return (
    <Card>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.imageContainer}>
          <Image style={styles.cardImage} source={imageSource} />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </TouchableOpacity>
    </Card>
  );
}

export default function Cards({onHistoryPress, onRedeemPress}: CardsProps) {
  return (
    <View style={styles.cardContainer}>
      <CardITem
        onPress={onHistoryPress}
        imageSource={require('../../../assets/consulta-historial.png')}
        title="Consulta tu historial"
      />
      <CardITem
        onPress={onRedeemPress}
        imageSource={require('../../../assets/cambia-puntos.png')}
        title="Cambia tus puntos"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imageContainer: {
    height: 156,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    width: 125,
    height: 125,
  },
  titleContainer: {
    height: 64,
    padding: 12,
    width: 156,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: '#05053D',
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    letterSpacing: -0.28,
    textAlign: 'center',
  },
});
