import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../../mainNavigation/types';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import TextInput from '../../components/atoms/TextInput';
import Divider from '../../components/Divider';
import Header from './components/Header';
import Chip from './components/Chip';
import Disclaimer from './components/Disclaimer';
import {StepTwoProps} from '../../mainNavigation/types';
import {useTransactionContext} from '../../contexts/TransactionContext';

const SelectPoints = ({route}: StepTwoProps) => {
  const navigation = useNavigation<NavigationProps>();
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const {points, entity} = route.params;
  const {userPoints, setUserPoints} = useTransactionContext();
  const [selectedChips, setSelectedChips] = useState<number[]>([]);

  const handleInputChange = (value: string) => {
    setInputValue(value);
    const numericValue = parseFloat(value);

    if (numericValue > 1000) {
      setIsValid(true);
    } else setIsValid(false);
  };

  const handleContinuePress = () => {
    if (userPoints >= points) {
      setUserPoints(userPoints - parseFloat(inputValue) * 10);
      navigation.navigate('ChangePointsStepThree', {
        points,
        entity,
        inputValue,
      });
    }
  };

  const handleChipPress = (chipPoints: number) => {
    const calculatedValue = chipPoints / 10; // Calcula el valor en pesos
    setInputValue(calculatedValue.toString()); // Actualiza el valor del TextInput
    setSelectedChips([chipPoints]);
  };

  return (
    <View style={styles.container}>
      <Header points={userPoints} />

      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.description}>
            Elige la marca aliada en la que quieres usar tus puntos
          </Text>

          {
            <View style={styles.chipsContainer}>
              {userPoints >= 1000 && (
                <View style={styles.pairChipsContainer}>
                  <Chip
                    points={500}
                    onPress={() => {
                      handleChipPress(500);
                    }}
                    selected={selectedChips.includes(500)}
                  />
                  <Chip
                    points={1000}
                    onPress={() => {
                      handleChipPress(1000);
                    }}
                    selected={selectedChips.includes(1000)}
                  />
                </View>
              )}
              {userPoints >= 10000 && (
                <View style={styles.pairChipsContainer}>
                  <Chip
                    points={2000}
                    onPress={() => {
                      handleChipPress(2000);
                    }}
                    selected={selectedChips.includes(2000)}
                  />
                  <Chip
                    points={5000}
                    onPress={() => {
                      handleChipPress(5000);
                    }}
                    selected={selectedChips.includes(5000)}
                  />
                </View>
              )}
            </View>
          }

          <TextInput
            label="Monto en pesos"
            variant="numeric"
            maxLength={10}
            pattern={['(?=.*\\d)']}
            // onValidation={setIsValid}
            value={inputValue}
            onChangeText={handleInputChange}
            editable={userPoints < points ? false : true}
            selectTextOnFocus={userPoints < points ? false : true}
            error={isValid ? 'El valor máximo que puedes cambiar es 1000' : ''}
          />

          {!isValid && (
            <Text style={styles.message}>
              El valor mínimo que puedes cambiar es $ {points / 10}.00
            </Text>
          )}

          {userPoints < points && (
            <>
              <Divider height={16} />
              <Disclaimer
                description={`Recuerda que necesitas tener mínimo $${
                  points / 10
                }.00 en puntos para poder cambiarlos con la marca que elegiste`}
              />
            </>
          )}
        </View>

        <Button
          disabled={
            userPoints < points || isValid || inputValue === '' ? true : false
          }
          variant="primary"
          text="Continuar"
          onPress={handleContinuePress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  description: {
    color: '#05053D',
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: -0.32,
    marginBottom: 16,
    textAlign: 'justify',
  },
  message: {
    color: '#69698B',
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    letterSpacing: -0.34,
    marginTop: 4,
    marginHorizontal: 8,
  },
  chipsContainer: {
    marginBottom: 32,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  pairChipsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default SelectPoints;
