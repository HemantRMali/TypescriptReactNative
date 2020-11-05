import React from 'react';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import styles from './styles';

interface defaultTextInputProps {
  label: string;
  value: string;
  isSecure?: boolean;
  onChangeText(arg0: string): void;
}

const DefaultTextInput = (props: defaultTextInputProps) => {
  return (
    <FloatingLabelInput
      containerStyles={styles.textInputContainer}
      label={props.label}
      value={props.value}
      secureTextEntry={props.isSecure}
      onChangeText={(text: string) => {
        props.onChangeText(text);
      }}
    />
  );
};

export default DefaultTextInput;
