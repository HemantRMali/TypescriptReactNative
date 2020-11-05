import React, {useEffect} from 'react';
import {View, StyleSheet, Dimensions, NativeModules, Alert} from 'react-native';
import DefaultButton from '../../components/DefaultButton';
import ScreenTitle from '../../components/ScreenTitle';
import CustomTextInput from '../../components/DefaultTextInput';
import DefaultButtonStyle from '../../components/DefaultButton/styles';
import {ButtonVariationsEnum} from '../../enums';
import {useDispatch} from 'react-redux';
import {saveUserDetails} from './actions';
import {NavigationProp} from '@react-navigation/native';
import {Screens, TextInputLabels, ButtonTitles} from '../../constants';
import {colors} from '../../assets/colors';

interface welcomeProps {
  navigation?: NavigationProp<any>;
}
const {TargetOSManager} = NativeModules;

const checkTargetOS = async () => {
  const message = await TargetOSManager.isRunningOnDevice();
  Alert.alert(message);
};

const Welcome = (props: welcomeProps) => {
  const [userName, setUserName] = React.useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    checkTargetOS();
  }, []);

  const onPress = () => {
    if (userName.trim().length > 0) {
      const user = {name: userName};
      dispatch(saveUserDetails(user));
      props.navigation?.navigate(Screens.buttonVariations);
    }
  };

  return (
    <View style={styles.container}>
      <ScreenTitle title=" Hi There, Welcome..!" />
      <View style={styles.textInputAndButtonContainer}>
        <CustomTextInput
          label={TextInputLabels.enterFullName}
          value={userName}
          isSecure={false}
          onChangeText={(value) => setUserName(value)}
        />
        <DefaultButton
          style={DefaultButtonStyle.primary}
          variationType={ButtonVariationsEnum.primary}
          title={ButtonTitles.continue}
          titleColor={colors.white}
          onPress={() => onPress()}
        />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {flex: 1},
  textInputAndButtonContainer: {
    marginTop: Dimensions.get('screen').height * 0.2,
    marginHorizontal: 30,
  },
});
