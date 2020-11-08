import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
interface DefaultButtonProps {
  onPress?(): void;
  title: string;
  variationType?: string;
  testId?: string;
  style?: object;
  textStyle?: object;
}

const DefaultButton: React.FC<DefaultButtonProps> = ({
  onPress,
  title,
  testId,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity testID={testId} onPress={onPress}>
      <View style={[styles.commonButtonStyle, style]}>
        <Text style={[styles.buttonTitle, textStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DefaultButton;
