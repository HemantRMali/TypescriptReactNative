import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

interface defaultButtonProps {
  onPress?(): void;
  title: string;
  style: object;
  fontSize: number;
  titleColor: string;
  variationType?: string;
}

const DefaultButton = (props: defaultButtonProps) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[props.style]}>
        <Text style={[{color: props.titleColor, fontSize: props.fontSize}]}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

DefaultButton.defaultProps = {
  titleColor: 'steelblue',
  fontSize: 20,
};
export default DefaultButton;
