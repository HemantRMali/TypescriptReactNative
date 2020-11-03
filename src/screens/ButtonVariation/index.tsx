import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import DefaultButton from '../../components/Button';
import DefaultButtonStyle from '../../components/Button/styles';
import SwipeButton from 'rn-swipe-button';
import ScreenTitle from '../../components/ScreenTitle';
import {useSelector} from 'react-redux';
import {RootState} from '../../reducers';

interface ButtonVariationProps {
  navigation: any;
}
const diamondIcon = require('../../assets/images/diamond1.png');

const thumbIconComponent = () => (
  <Image resizeMode="center" source={diamondIcon} />
);

const ButtonVariation = (props: ButtonVariationProps) => {
  const user = useSelector((state: RootState) => state.UserReducer.user);
  const navigateToDetails = () => {
    props.navigation.navigate('Details');
  };
  return (
    <View style={styles.container}>
      <ScreenTitle style={styles.screenTItle} title={user.name} />

      <View style={styles.bottomView}>
        <Text style={styles.title}>4 variations of a button</Text>
        <DefaultButton
          style={DefaultButtonStyle.secondaryButtonVariation}
          title="Press me"
          onPress={navigateToDetails}
        />
        <DefaultButton
          style={DefaultButtonStyle.thirdButtonVariation}
          title="Press me"
          onPress={navigateToDetails}
        />
        <DefaultButton
          style={DefaultButtonStyle.primaryButtonVariation}
          title="Press me"
          titleColor={'white'}
          onPress={navigateToDetails}
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
          onSwipeSuccess={() => navigateToDetails()}
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
  screenTItle: {fontSize: 25, alignSelf: 'flex-end', color: 'white'},
});
