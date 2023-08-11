import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Text from '../../../components/Text/Text';
import Tag from '../../../components/atoms/Tag';
import Divider from '../../../components/Divider';
import {useTransactionContext} from '../../../contexts/TransactionContext';

export default function Header() {
  const {userPoints} = useTransactionContext();

  return (
    <View style={styles.container}>
      <View>
        <Text variant="small-body-bold">Tienes</Text>
        <Text variant="headline-large">
          {userPoints.toLocaleString()} puntos
        </Text>
        <Divider height={8} />
        <Tag
          leftIcon={require('../../../assets/starburst.png')}
          variant="points"
          text={`Valen $${(userPoints / 10).toLocaleString()}.00`}
          size="large"
        />
      </View>
      <Image
        source={require('../../../assets/spin-premia.png')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 16,
    justifyContent: 'space-between',
  },
  image: {
    width: 120,
    height: 120,
  },
});
