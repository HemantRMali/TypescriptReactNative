import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import CustomButton from '../../components/Button';
import ScreenTitle from '../../components/ScreenTitle';
import CustomTextInput from '../../components/TextInput';
import DefaultButtonStyle from '../../components/Button/styles';
import {ButtonVariationsEnum} from '../../enums';

interface welcomeProps {
  navigation: any;
}

const Welcome = (props: welcomeProps) => {
  const [userName, setUserName] = React.useState('');

  const onPress = () => {
    if (userName.trim().length > 0) {
      props.navigation.navigate('ButtonVariations');
    }
  };

  return (
    <View style={styles.container}>
      <ScreenTitle title=" Hi There, Welcome..!" />
      <View style={styles.textInputAndButtonContainer}>
        <CustomTextInput
          label="Enter Full Name"
          value={userName}
          isSecure={false}
          onChangeText={(value) => setUserName(value)}
        />
        <CustomButton
          style={DefaultButtonStyle.primaryButtonVariation}
          variationType={ButtonVariationsEnum.primary}
          title="Continue"
          titleColor={'white'}
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
