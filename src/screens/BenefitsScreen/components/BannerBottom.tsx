import React from 'react';
import {ScrollView, Image, View, StyleSheet} from 'react-native';

export default function BannerBottom() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      <Image
        testID="image-1"
        source={require('../../../assets/banner.png')}
        style={styles.image}
      />
      <View style={{width: 16}} />
      <Image
        testID="image-2"
        source={require('../../../assets/banner.png')}
        style={styles.image}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
  },
  image: {
    width: 308,
    height: 128,
  },
});
