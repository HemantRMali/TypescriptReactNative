import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
export default StyleSheet.create({
  primary: {
    backgroundColor: colors.steelblue,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 20,
  },
  buttonTitle: {
    fontSize: 20,
  },
  secondary: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 20,
    backgroundColor: colors.transparent,
  },
  third: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: colors.lightgray,
    margin: 20,
  },
});
