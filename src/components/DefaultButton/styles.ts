import {StyleSheet} from 'react-native';
import commonStyles from '../../assets/styles/styles';
import colors from '../../assets/colors/colors';
export default StyleSheet.create({
  ...commonStyles,
  commonButtonStyle: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 20,
  },

  buttonTitle: {
    fontSize: 20,
    color: colors.white,
  },
});
