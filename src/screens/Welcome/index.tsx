import React, {useEffect, useState} from 'react';
import {View, NativeModules, Alert} from 'react-native';
import DefaultButton from '../../components/DefaultButton';
import ScreenTitle from '../../components/ScreenTitle';
import CustomTextInput from '../../components/DefaultTextInput';
import {useDispatch} from 'react-redux';
import {saveUserDetails} from './actions';
import {TextInputLabels, ButtonTitles} from '../../constants';
import styles from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../App';

const {TargetOSManager} = NativeModules;

const checkTargetOS = async () => {
  const message = await TargetOSManager.isRunningOnDevice();
  Alert.alert(message);
};

export type WelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Welcome'
>;

interface WelcomeProps {
  userName?: string;
  navigation?: WelcomeScreenNavigationProp;
}

const Welcome: React.FC<WelcomeProps> = ({navigation}) => {
  const [userName, setUserName] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    checkTargetOS();
  }, []);

  const onPressContinue = () => {
    if (userName.trim().length >= 3) {
      const user = {name: userName};
      dispatch(saveUserDetails(user));
      navigation?.navigate('ButtonVariations');
    } else {
      Alert.alert('User name should have atleast 3 character');
    }
  };

  return (
    <View style={styles.container}>
      <ScreenTitle title=" Hi There, Welcome..!" />
      <View style={styles.textInputAndButtonContainer}>
        <CustomTextInput
          testId="userName"
          label={TextInputLabels.enterFullName}
          value={userName}
          placeholder={TextInputLabels.enterFullName}
          onChangeText={(value) => setUserName(value)}
        />
        <DefaultButton
          testId="continueButton"
          title={ButtonTitles.continue}
          style={styles.button}
          onPress={() => onPressContinue()}
        />
      </View>
    </View>
  );
};

export default Welcome;
