import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {DeviceInfo} from '../../constants';
import commonStyles from '../../assets/styles';
export default StyleSheet.create({
  ...commonStyles,
  safeArea: {flex: 1},
  container: {
    flex: 1,
    backgroundColor: colors.rgba240,
  },
  textInputAndButtonContainer: {
    marginTop: DeviceInfo.height * 0.2,
    marginHorizontal: 30,
  },
});
