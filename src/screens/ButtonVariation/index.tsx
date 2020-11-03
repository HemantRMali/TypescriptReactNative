import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface ButtonVariationProps {}

const ButtonVariation = (props: ButtonVariationProps) => {
  return (
    <View style={styles.container}>
      <Text>ButtonVariation</Text>
    </View>
  );
};

export default ButtonVariation;

const styles = StyleSheet.create({
  container: {},
});
