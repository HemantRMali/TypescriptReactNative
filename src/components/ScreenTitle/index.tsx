import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

interface screenTitleProps {
  title: string;
  style?: object;
}
const ScreenTitle = (props: screenTitleProps) => {
  return <Text style={[styles.screenTitle, props.style]}>{props.title}</Text>;
};

export default ScreenTitle;
