import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';
import Card from '../../../components/Card/Card';

type AllyButtonProps = {
  imageSource: ImageSourcePropType;
  onPress: () => void;
  entity: string;
  description: string;
};

export default function AllyButton({
  imageSource,
  onPress,
  entity,
  description,
}: AllyButtonProps) {
  return (
    <Card style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <Image style={styles.imageLogo} source={imageSource} />
        <View style={styles.content}>
          <Text style={styles.title}>{entity}</Text>
          <Text style={styles.subtitle}>{description}</Text>
        </View>

        <Image
          style={{marginHorizontal: 12}}
          source={require('../../../assets/rightArrow.png')}
        />
      </TouchableOpacity>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },

  buttonContainer: {
    height: 72,
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageLogo: {
    width: 40,
    height: 40,
    marginLeft: 16,
    marginRight: 8,
  },
  content: {
    flex: 1,
  },
  title: {
    color: '#05053D',
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    letterSpacing: -0.32,
    marginBottom: 4,
  },
  subtitle: {
    color: '#69698B',
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: -0.28,
  },
});
