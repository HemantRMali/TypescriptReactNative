import React from 'react';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import styles from './styles';

interface DefaultTextInputProps {
  isSecure?: boolean;
  label: string;
  value: string;
  testId?: string;
  onChangeText(text: string): void;
  placeholder?: string;
}

const DefaultTextInput: React.FC<DefaultTextInputProps> = (props) => {
  const onChangeText = (text: string) => {
    props.onChangeText(text);
  };
  return (
    <FloatingLabelInput
      testID={props.testId}
      containerStyles={styles.textInputContainer}
      label={props.label}
      placeholder={props.placeholder}
      value={props.value}
      secureTextEntry={props.isSecure}
      onChangeText={(text: string) => {
        onChangeText(text);
      }}
    />
  );
};

DefaultTextInput.defaultProps = {
  isSecure: false,
};
export default DefaultTextInput;
