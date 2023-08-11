import React from 'react';
import {View} from 'react-native';

type Props = {
  width?: number;
  height?: number;
};
export default function Divider({width, height}: Props) {
  return <View style={{width, height}} />;
}
