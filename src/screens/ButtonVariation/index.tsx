import * as React from 'react';
import {Text, View, Image} from 'react-native';
import DefaultButton from '../../components/DefaultButton';
import SwipeButton from 'rn-swipe-button';
import ScreenTitle from '../../components/ScreenTitle';
import {useSelector} from 'react-redux';
import {RootState} from '../../reducers';
import styles from './styles';
import {Strings, Screens} from '../../constants';
import {colors} from '../../assets/colors';
import {ButtonVariationsEnum} from '../../enums';
import {useNavigation} from '@react-navigation/native';

interface ButtonVariationProps {}

const diamondIcon = require('../../assets/images/diamond1.png');

const thumbIcon = () => <Image resizeMode="center" source={diamondIcon} />;

const ButtonVariation = (props: ButtonVariationProps) => {
  const user = useSelector((state: RootState) => state.UserReducer.user);

  const navigation = useNavigation();

  const navigateToDetails = () => {
    navigation.navigate(Screens.details);
  };
  return (
    <View style={styles.container}>
      <ScreenTitle style={styles.screenTItle} title={user.name} />

      <View style={styles.bottomView}>
        <Text style={styles.title}>4 variations of a button</Text>
        <DefaultButton
          title={Strings.pressMe}
          onPress={navigateToDetails}
          variationType={ButtonVariationsEnum.secondary}
        />
        <DefaultButton
          title={Strings.pressMe}
          onPress={navigateToDetails}
          variationType={ButtonVariationsEnum.third}
        />
        <DefaultButton
          title={Strings.pressMe}
          onPress={navigateToDetails}
          variationType={ButtonVariationsEnum.primary}
        />
        <SwipeButton
          containerStyles={styles.containerStyles}
          thumbIconStyles={styles.thumbIconStyles}
          thumbIconComponent={thumbIcon}
          title={Strings.slideToContinue}
          titleColor={colors.white}
          railStyles={styles.railStyles}
          railBackgroundColor={colors.black}
          onSwipeStart={() => console.log('swipe started')}
          onSwipeFail={() => console.log('incomplete swipe')}
          onSwipeSuccess={() => navigateToDetails()}
        />
      </View>
    </View>
  );
};

export default ButtonVariation;
