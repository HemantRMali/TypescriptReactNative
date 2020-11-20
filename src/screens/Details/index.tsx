import * as React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import ScreenTitle from '../../components/ScreenTitle/ScreenTitle';
import {RootState} from '../../reducers/reducers';
import styles from './styles';

const Details: React.FC = () => {
  const user = useSelector((state: RootState) => state.UserReducer.user);

  return (
    <>
      <ScreenTitle style={styles.screenTItle} title={user.name} />
      <View style={styles.container}>
        <Text testID="detail-screen-text" style={styles.detailTitle}>
          Details Screen
        </Text>
      </View>
    </>
  );
};

export default Details;
