import React from 'react';
import {View, Text, StyleSheet, Image, ImageSourcePropType} from 'react-native';

import Card from '../../../components/Card/Card';
import {LOGOS} from '../../../styles/LogosObj/logos';

type HeaderDetailProps = {
  entityName: string;
  points: number;
  operation: 'earned' | 'used' | string;
};

export default function Header({
  entityName,
  points,
  operation,
}: HeaderDetailProps) {
  return (
    <View style={styles.header}>
      <Card style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.title}>{entityName}</Text>
          <View style={styles.body}>
            <Text style={styles.textBody}>En esta compra ganaste:</Text>
          </View>

          <View style={styles.pointsContainer}>
            <Text style={styles.sign}>
              {operation === 'earned' ? '+' : '-'}
            </Text>
            <Text style={styles.points}>{points}</Text>
          </View>
        </View>
      </Card>
      <Image source={LOGOS[entityName]} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  header: {
    alignItems: 'center',
  },
  logo: {
    height: 72,
    width: 72,
    position: 'absolute',
  },
  cardContainer: {
    width: '100%',
    marginTop: 42,
  },
  card: {
    paddingTop: 38,
    alignItems: 'center',
  },

  title: {
    color: '#05053D',
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 24,
  },
  body: {
    width: 280,
    padding: 10,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F7',
    marginVertical: 8,
  },
  textBody: {
    color: '#05053D',
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: -0.32,
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  sign: {
    color: '#1723D3',
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
  },
  points: {
    color: '#05053D',
    fontFamily: 'Poppins',
    fontSize: 40,
    fontWeight: '500',
    lineHeight: 52,
    marginLeft: 4,
  },
});
