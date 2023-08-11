import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import Card from '../../../components/Card/Card';
import {LOGOS} from '../../../styles/LogosObj/logos';

type HeaderTicketProps = {
  entityName: string;
  certNumber: string;
};

export default function HeaderTicket({
  entityName,
  certNumber,
}: HeaderTicketProps) {
  return (
    <View style={styles.container}>
      <Card style={styles.cardContainer}>
        <Text style={styles.entityName}>{entityName}</Text>

        <View style={styles.content}>
          <Text style={styles.description}>
            Toca el ícono para copiar el certificado de regalo o escríbelo desde
            la app o página web de Volaris
          </Text>

          <View style={styles.chipContainer}>
            <View>
              <Text style={styles.chipLabel}>Certificado de regalo</Text>
              <Text style={styles.certNumber}>{certNumber}</Text>
            </View>
            <TouchableOpacity style={styles.copyContainer}>
              <Image
                style={styles.copyIcon}
                source={require('../../../assets/copy-icon.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Card>
      <Image source={LOGOS[entityName]} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 16,
  },
  cardContainer: {
    width: '100%',
    marginTop: 42,
  },
  entityName: {
    marginTop: 38,
    textAlign: 'center',
    color: '#05053D',
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 24,
  },
  content: {
    marginVertical: 16,
    marginHorizontal: 8,
  },
  description: {
    color: '#05053D',
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: -0.28,
    textAlign: 'justify',
  },
  chipContainer: {
    borderRadius: 16,
    backgroundColor: '#F5F5F7',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    paddingLeft: 12,
    height: 56,
  },
  chipLabel: {
    color: '#373764',
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    letterSpacing: -0.24,
  },
  certNumber: {
    marginTop: 4,
    color: '#373764',
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 16,
    letterSpacing: -0.32,
  },
  copyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48,
  },
  copyIcon: {
    width: 24,
    height: 24,
  },
  logo: {
    height: 72,
    width: 72,
    position: 'absolute',
  },
});
