import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../assets/colors';
import {ButtonVariationsEnum} from '../../enums';
import styles from './styles';
interface defaultButtonProps {
  onPress?(): void;
  title: string;
  variationType?: string;
}

const DefaultButton = (props: defaultButtonProps) => {
  let buttonStyle;
  let buttonTitleColor = colors.steelblue;
  switch (props.variationType) {
    case ButtonVariationsEnum.primary:
      buttonStyle = styles.primary;
      buttonTitleColor = colors.white;
      break;
    case ButtonVariationsEnum.secondary:
      buttonStyle = styles.secondary;
      break;
    case ButtonVariationsEnum.third:
      buttonStyle = styles.third;
      break;
    default:
      buttonStyle = styles.primary;
      break;
  }
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={buttonStyle}>
        <Text style={[styles.buttonTitle, {color: buttonTitleColor}]}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

DefaultButton.defaultProps = {
  variationType: ButtonVariationsEnum.primary,
};
export default DefaultButton;
