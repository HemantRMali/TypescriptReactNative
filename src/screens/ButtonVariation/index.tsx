import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import DefaultButton from '../../components/Button';
import DefaultButtonStyle from '../../components/Button/styles';
import SwipeButton from 'rn-swipe-button';

interface ButtonVariationProps {
  thumbIconComponent(): void;
}
const diamondIcon = require('../../assets/images/diamond1.png');

const thumbIconComponent = () => (
  <Image resizeMode="center" source={diamondIcon} />
);
const ButtonVariation = (props: ButtonVariationProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.bottomView}>
        <Text style={styles.title}>4 variations of a button</Text>
        <DefaultButton
          style={DefaultButtonStyle.secondaryButtonVariation}
          title="Press me"
        />
        <DefaultButton
          style={DefaultButtonStyle.thirdButtonVariation}
          title="Press me"
        />
        <DefaultButton
          style={DefaultButtonStyle.primaryButtonVariation}
          title="Press me"
          titleColor={'white'}
        />
        <SwipeButton
          containerStyles={styles.containerStyles}
          thumbIconStyles={styles.thumbIconStyles}
          thumbIconComponent={thumbIconComponent}
          title="Slide me to continue"
          titleColor="white"
          railStyles={styles.railStyles}
          railBackgroundColor="black"
          onSwipeStart={() => console.log('swipe started')}
          onSwipeFail={() => console.log('incomplete swipe')}
          onSwipeSuccess={() => console.log('Submitted successfully!')}
        />
      </View>
    </View>
  );
};

export default ButtonVariation;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'black', opacity: 0.9},
  bottomView: {
    width: '100%',
    position: 'absolute',
    bottom: 50,
  },

  textStyle: {
    color: '#fff',
    fontSize: 22,
  },
  containerStyles: {borderRadius: 10, margin: 20},
  thumbIconStyles: {borderRadius: 10},
  railStyles: {backgroundColor: 'black', borderColor: 'black'},
  title: {color: 'yellow', alignSelf: 'center'},
});
