import React, {useState} from 'react';

import {useNavigation, useTheme} from '@react-navigation/native';
import {Text, View} from 'react-native';

import dynamicStyles from './styles';
import axiosInstance from '../../utils/axiosHandler';

const Dashboard = () => {
  const {colors} = useTheme();
  const styles = dynamicStyles(colors);
  const navigation = useNavigation();

  const [first, setFirst] = useState();
  const RegisterUser = async () => {
    try {
      await axiosInstance
        .get('/3/movie/upcoming?api_key=7ef746d8c4e019746e9bd764931eadd5')
        .then(() => {});
      // if (res && res.status === 200) {
      // }
    } catch (err) {}
  };
  return (
    <View>
      <Text>Hell</Text>
    </View>
  );
};

export default Dashboard;
