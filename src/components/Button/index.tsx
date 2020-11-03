import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

interface customButtonProps {
  onPress(): void;
  title: string;
}

const CustomButton = (props: customButtonProps) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.signInButton}>
        <Text style={styles.signInText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
