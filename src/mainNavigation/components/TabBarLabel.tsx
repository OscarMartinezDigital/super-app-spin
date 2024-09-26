import React from 'react';
import {Text, StyleSheet} from 'react-native';

type TabBarLabelProps = {
  focused: boolean;
  routeName: string;
};
export default function TabBarLabel({focused, routeName}: TabBarLabelProps) {
  const colorStyle = {color: focused ? '#05053D' : '#69698B'};
  return <Text style={[styles.text, colorStyle]}>{routeName}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Inter-Bold',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 16,
    letterSpacing: -0.24,
  },
});
