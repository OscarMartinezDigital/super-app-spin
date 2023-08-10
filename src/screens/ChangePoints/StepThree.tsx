import React, {useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../../mainNavigation/types';
import Text from '../../components/Text/Text';
import SnackBar from '../../components/atoms/SnackBar';
import Button from '../../components/Button/Button';
import HeaderTicket from './components/HeaderTicket';
import Details from './components/Details';
import TransactioNumber from './components/TransactionNumber';

const snackBarOptions = {
  text: '¡Listo! Cambiaste tus puntos',
  variant: 'info',
  duration: 4000,
};

export default function ChangePointsStepThree() {
  const navigation = useNavigation<NavigationProps>();

  useEffect(() => {
    SnackBar.show(snackBarOptions);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.greenRectangle} />
      <View
        style={{height: 64, justifyContent: 'center', paddingHorizontal: 16}}>
        <Text style={{color: 'white'}} variant="headline-small">
          Detalle del movimiento
        </Text>
      </View>
      <HeaderTicket entityName="Volaris" certNumber="42738499092812000" />

      <ScrollView
        contentContainerStyle={{
          justifyContent: 'space-between',
        }}>
        <View>
          <TouchableOpacity style={styles.helpLink}>
            <Text variant="text-link-one">
              ¿Cómo usar mi certificado de regalo?
            </Text>
          </TouchableOpacity>

          <Details points={200} date="Wed Aug 09 2023" />
          <TransactioNumber number="5dced89c-2b6e-4a1c-a715-c19b0a51" />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            disabled={false}
            variant="primary"
            text="Usar certificado de regalo"
            onPress={() => navigation.navigate('MainTabs', {screen: 'home'})}
          />
          <Button
            disabled={false}
            variant="secondary"
            text="Guardar para otro momento"
            onPress={() => navigation.navigate('MainTabs', {screen: 'Home'})}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  greenRectangle: {
    backgroundColor: '#087D6F',
    height: 232,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },
  helpLink: {
    alignItems: 'center',
    paddingTop: 16,
  },
  buttonContainer: {
    gap: 12,
    padding: 16,
  },
});
