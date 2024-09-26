import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../../components/Text/Text';
import Divider from '../../components/Divider';
import Modal from '../../components/atoms/Modal';
import Header from './components/Header';
import LogoutButton from './components/LogoutButton';

export default function AccountScreen() {
  function handleLogout() {
    Modal.show({
      title: '¿Quieres cerrar tu sesión?',
      variant: 'two-button',
      description:
        'Recuerda que puedes volver a entrar a la app cuando quieras',
      firstButtonProps: {
        text: 'Sí, cerrar sesión',
        onPress: () => Modal.hide(),
        enableCloseOnPress: true,
      },
      secondButtonProps: {
        text: 'En otro momento',
        onPress: () => Modal.hide(),
      },
    });
  }
  return (
    <View style={styles.container}>
      <View>
        <Header />
        <Divider height={32} />

        <Text style={{marginLeft: 16}} variant="headline-medium">
          Otras acciones
        </Text>

        <Divider height={8} />
        <LogoutButton text="Cierra sesión" onPress={handleLogout} />
      </View>

      <Text style={styles.versionText} variant="extra-small-body">
        Versión: 1.203.430.983
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  versionText: {
    color: '#B4B4C5',
    textAlign: 'center',
    marginBottom: 8,
  },
});
