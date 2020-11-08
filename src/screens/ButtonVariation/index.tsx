import * as React from 'react';
import {Text, View, Image} from 'react-native';
import DefaultButton from '../../components/DefaultButton';
import SwipeButton from 'rn-swipe-button';
import ScreenTitle from '../../components/ScreenTitle';
import {useSelector} from 'react-redux';
import {RootState} from '../../reducers';
import styles from './styles';
import {Strings} from '../../constants';
import colors from '../../assets/colors';

import diamondIcon from '../../assets/images/diamond.png';
import {RootStackParamList} from '../../../App';
import {StackNavigationProp} from '@react-navigation/stack';

const thumbIcon = () => <Image resizeMode="center" source={diamondIcon} />;

type ButtonVariationScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ButtonVariations'
>;

interface ButtonVariationProps {
  userName?: string;
  navigation?: ButtonVariationScreenNavigationProp;
}

const ButtonVariation: React.FC<ButtonVariationProps> = ({navigation}) => {
  const user = useSelector((state: RootState) => state.UserReducer.user);

  const navigateToDetails = () => {
    navigation?.navigate('Details');
  };
  return (
    <View style={styles.container}>
      <ScreenTitle style={styles.screenTItle} title={user.name} />

      <View style={styles.bottomView}>
        <Text style={styles.title}>4 variations of a button</Text>
        <DefaultButton
          title={Strings.pressMe}
          onPress={navigateToDetails}
          style={styles.secondary}
          textStyle={styles.textStyle}
        />
        <DefaultButton
          title={Strings.pressMe}
          onPress={navigateToDetails}
          style={styles.third}
          textStyle={styles.textStyle}
        />
        <DefaultButton
          title={Strings.pressMe}
          onPress={navigateToDetails}
          style={styles.primary}
        />
        <SwipeButton
          containerStyles={styles.containerStyles}
          thumbIconBackgroundColor={colors.steelblue}
          thumbIconStyles={styles.thumbIconStyles}
          thumbIconComponent={thumbIcon}
          title={Strings.slideToContinue}
          titleColor={colors.white}
          railStyles={styles.railStyles}
          railBackgroundColor={colors.black}
          onSwipeSuccess={() => navigateToDetails()}
        />
      </View>
    </View>
  );
};

export default ButtonVariation;
