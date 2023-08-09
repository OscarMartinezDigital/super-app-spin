import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import Text from '../../../components/Text/Text';

type LogoutButtonProps = {
  onPress: () => void;
  text: string;
};

export default function LogoutButton({onPress, text}: LogoutButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        style={styles.text}
        source={require('../../../assets/logout.png')}
      />
      <Text variant="extra-small-body">{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#B4B4C5',
  },
  text: {
    width: 24,
    height: 24,
    marginLeft: 8,
    marginRight: 20,
  },
});
