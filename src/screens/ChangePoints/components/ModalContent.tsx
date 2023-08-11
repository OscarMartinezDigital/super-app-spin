import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Text from '../../../components/Text/Text';

type ItemProps = {
  text: string;
};
function Item({text}: ItemProps) {
  return (
    <View style={itemStyles.container}>
      <Text style={itemStyles.text}>{text}</Text>
    </View>
  );
}
type ModalContentProps = {
  onClose: () => void;
};
export default function ModalContent({onClose}: ModalContentProps) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          ¿Cómo usar un certificado de regalo?
        </Text>
        <TouchableOpacity style={styles.closeContainer} onPress={onClose}>
          <Image source={require('../../../assets/bottom-sheet-close.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <Item text="1. Copia tu certificado de regalo de Spin Premia" />
        <Item text="2. Entra a la app o página web de Volaris" />
        <Item text="3. Elige tu próximo destino y vuelos" />
        <Item text="4. Antes de terminar tu compra, pega o escribe el certificado de regalo al elegir tu método de pago" />

        <Image
          style={styles.placeholder}
          source={require('../../../assets/volaris-placeholder.png')}
        />
      </View>
    </View>
  );
}

const itemStyles = StyleSheet.create({
  container: {
    padding: 8,
    borderBottomWidth: 1,
    borderColor: '#E6E6EC',
  },
  text: {
    color: '#05053D',
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: -0.32,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#E6E6EC',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  titleText: {
    color: '#05053D',
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24,
    flex: 1,
  },
  closeContainer: {
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    marginVertical: 20,
    paddingHorizontal: 16,
    width: '100%',
  },
  placeholder: {
    width: 348,
    height: 209,
    marginTop: 16,
  },
});
