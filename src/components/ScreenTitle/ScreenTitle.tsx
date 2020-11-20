import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

interface ScreenTitleProps {
  title: string;
  style?: object;
  tesId?: string;
}
const ScreenTitle: React.FC<ScreenTitleProps> = (props) => {
  return (
    <Text testID={props.tesId} style={[styles.screenTitle, props.style]}>
      {props.title}
    </Text>
  );
};

export default ScreenTitle;
