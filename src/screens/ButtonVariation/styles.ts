import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
export default StyleSheet.create({
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
  railStyles: {backgroundColor: colors.black, borderColor: colors.black},
  title: {color: colors.yellow, alignSelf: 'center'},
  screenTItle: {fontSize: 25, alignSelf: 'flex-end', color: colors.white},
});
