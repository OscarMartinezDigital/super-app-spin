import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import TextInput from '../../components/atoms/TextInput';
import Divider from '../../components/Divider';
import Header from './components/Header';
import Chip from './components/Chip';
import Disclaimer from './components/Disclaimer';

const SelectPoints = () => {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState([false]);

  return (
    <View style={styles.container}>
      <Header points={1200} />

      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.description}>
            Elige la marca aliada en la que quieres usar tus puntos
          </Text>

          <View style={styles.chipsContainer}>
            <Chip points={500} onPress={() => {}} selected={false} />
            <Chip points={1000} onPress={() => {}} selected={false} />
            <Chip points={2000} onPress={() => {}} selected={false} />
            <Chip points={5000} onPress={() => {}} selected={true} />
          </View>

          <TextInput
            label="Monto en pesos"
            variant="numeric"
            maxLength={10}
            pattern={['(?=.*\\d)']}
            onValidation={setIsValid}
            value={inputValue}
            onChangeText={setInputValue}
            // error="El valor máximo que puedes cambiar es $1,000.00"
          />

          <Text style={styles.message}>
            El valor máximo que puedes cambiar es $1,000.00
          </Text>

          {/* <Disclaimer description="Recuerda que necesitas tener mínimo $20.00 en puntos para poder cambiarlos con la marca que elegiste" /> */}
        </View>

        <Button
          disabled={false}
          variant="primary"
          text="Continuar"
          onPress={() => {}}
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
});

export default SelectPoints;
