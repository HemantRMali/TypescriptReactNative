import React, {useState} from 'react';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import styles from './styles';

interface defaultTextInputProps {
  label: string;
  value: string;
  isSecure: boolean;
  onChangeText(arg0: string): void;
}

const DefaultTextInput = (props: defaultTextInputProps) => {
  //const [value, setValue] = useState('');
  return (
    <FloatingLabelInput
      containerStyles={styles.textInputContainer}
      label={props.label}
      value={props.value}
      secureTextEntry={props.isSecure}
      onChangeText={(text: string) => {
        //setValue(text);
        props.onChangeText(text);
      }}
    />
  );
};

export default DefaultTextInput;
