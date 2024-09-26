import React, {useEffect, useCallback, useMemo, useRef} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {NavigationProps} from '../../mainNavigation/types';
import Text from '../../components/Text/Text';
import SnackBar from '../../components/atoms/SnackBar';
import Button from '../../components/Button/Button';
import HeaderTicket from './components/HeaderTicket';
import Details from './components/Details';
import TransactioNumber from './components/TransactionNumber';
import ModalContent from './components/ModalContent';
import {StepThreeProps} from '../../mainNavigation/types';

const snackBarOptions = {
  text: '¡Listo! Cambiaste tus puntos',
  variant: 'info',
  duration: 4000,
};

export default function ChangePointsStepThree({route}: StepThreeProps) {
  const {points, entity, inputValue} = route.params;

  const navigation = useNavigation<NavigationProps>();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['83%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  useEffect(() => {
    SnackBar.show(snackBarOptions);
  }, []);

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <View style={styles.greenRectangle} />
        <View style={styles.header}>
          <Text style={{color: 'white'}} variant="headline-small">
            Detalle del movimiento
          </Text>
        </View>
        <HeaderTicket entityName={entity} certNumber="42738499092812000" />

        <ScrollView
          contentContainerStyle={{
            justifyContent: 'space-between',
          }}>
          <View>
            <TouchableOpacity
              style={styles.helpLink}
              onPress={handlePresentModalPress}>
              <Text variant="text-link-one">
                ¿Cómo usar mi certificado de regalo?
              </Text>
            </TouchableOpacity>

            <Details
              points={parseFloat(inputValue)}
              date={new Date().toDateString()}
            />
            <TransactioNumber number="5dced89c-2b6e-4a1c-a715-c19b0a51" />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              disabled={false}
              variant="primary"
              text="Usar certificado de regalo"
              onPress={() => navigation.navigate('MainTabs')}
            />
            <Button
              disabled={false}
              variant="secondary"
              text="Guardar para otro momento"
              onPress={() => navigation.navigate('MainTabs')}
            />
          </View>
        </ScrollView>

        <BottomSheetModal
          ref={bottomSheetModalRef}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <ModalContent onClose={handleCloseModalPress} />
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
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
  header: {
    height: 64,
    justifyContent: 'center',
    paddingHorizontal: 16,
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
