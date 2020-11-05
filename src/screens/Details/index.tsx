import * as React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import ScreenTitle from '../../components/ScreenTitle';
import {RootState} from '../../reducers';
import styles from './styles';

const Details = () => {
  const user = useSelector((state: RootState) => state.UserReducer.user);

  return (
    <View style={styles.container}>
      <ScreenTitle style={styles.screenTItle} title={user.name} />
      <Text style={styles.detailTitle}>Details Screen</Text>
    </View>
  );
};

export default Details;
