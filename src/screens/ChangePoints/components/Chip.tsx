import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Text from '../../../components/Text/Text';
import {formatCurrency, formatThousands} from '../../../utils';

type ChipProps = {
  points: number;
  selected: boolean;
  onPress: () => void;
};

export default function Chip({points, selected, onPress}: ChipProps) {
  return (
    <View>
      <TouchableOpacity
        style={[styles.container, selected ? styles.containerSelected : null]}
        onPress={onPress}>
        <Text style={[styles.text, selected ? styles.textSelected : null]}>
          {formatCurrency(points / 10)}
        </Text>
      </TouchableOpacity>
      <Text style={styles.textPoints}>{formatThousands(points)} puntos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F7',
    borderRadius: 8,
    height: 40,
    paddingHorizontal: 12,
    width: 156,
  },
  containerSelected: {
    backgroundColor: '#E0E0FF',
  },
  text: {
    color: '#373764',
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 16,
    letterSpacing: -0.32,
  },
  textSelected: {
    color: '#1723D3',
  },
  textPoints: {
    color: '#69698B',
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    letterSpacing: -0.24,
    marginTop: 4,
    textAlign: 'center',
  },
});
