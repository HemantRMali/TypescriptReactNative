import React, {useEffect} from 'react';
import {View, NativeModules, Alert} from 'react-native';
import DefaultButton from '../../components/DefaultButton';
import ScreenTitle from '../../components/ScreenTitle';
import CustomTextInput from '../../components/DefaultTextInput';
import {ButtonVariationsEnum} from '../../enums';
import {useDispatch} from 'react-redux';
import {saveUserDetails} from './actions';
import {Screens, TextInputLabels, ButtonTitles} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const {TargetOSManager} = NativeModules;

const checkTargetOS = async () => {
  const message = await TargetOSManager.isRunningOnDevice();
  Alert.alert(message);
};

const Welcome = () => {
  const navigation = useNavigation();

  const [userName, setUserName] = React.useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    checkTargetOS();
  }, []);

  const onPress = () => {
    if (userName.trim().length > 0) {
      const user = {name: userName};
      dispatch(saveUserDetails(user));
      navigation.navigate(Screens.buttonVariations);
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
          variationType={ButtonVariationsEnum.primary}
          title={ButtonTitles.continue}
          onPress={() => onPress()}
        />
      </View>
    </View>
  );
};

export default Welcome;
