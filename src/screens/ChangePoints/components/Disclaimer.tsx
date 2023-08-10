import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Text from '../../../components/Text/Text';

type DisclaimerProps = {
  description: string;
};

export default function Disclaimer({description}: DisclaimerProps) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        source={require('../../../assets/alert-warn.png')}
      />
      <View style={{flex: 1}}>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFDFBC',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  description: {
    color: '#05053D',
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: -0.28,
  },
});
