import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import ScreenTitle from '../../components/ScreenTitle';
import {RootState} from '../../reducers';

interface detailsProps {}

const Details = (props: detailsProps) => {
  const user = useSelector((state: RootState) => state.UserReducer.user);

  return (
    <View style={styles.container}>
      <ScreenTitle style={styles.screenTItle} title={user.name} />
      <Text style={styles.detailTitle}>Details Screen</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center'},
  detailTitle: {fontSize: 30},
  screenTItle: {fontSize: 25, alignSelf: 'flex-end', color: 'black'},
});
