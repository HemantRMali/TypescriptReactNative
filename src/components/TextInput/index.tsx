import React, {useState} from 'react';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import styles from './styles';

interface customTextInputProps {
  label: string;
  value: string;
  isSecure: boolean;
  onChangeText(arg0: string): void;
}

const CustomTextInput = (props: customTextInputProps) => {
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

export default CustomTextInput;
