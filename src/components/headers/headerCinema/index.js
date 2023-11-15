import {View, Text, Touchable} from 'react-native';
import React from 'react';
import AppText from '../../appText';
import dynamicStyles from './styles';
import {useNavigation, useTheme} from '@react-navigation/native';
import {SvgXml} from 'react-native-svg';
import {textType} from '../../../constants/types';
import chervonBack from '../../../assets/svgs/chervonBack';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const HeaderCinema = ({title, subTitle}) => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const styles = dynamicStyles(colors);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <SvgXml xml={chervonBack} />
      </TouchableWithoutFeedback>

      <View style={styles.titleStyle}>
        <AppText type={textType.H6}>{title}</AppText>
        <AppText type={textType.BODY_02} style={styles.subTitleStyle}>
          {subTitle}
        </AppText>
      </View>

      <View />
    </View>
  );
};

export default HeaderCinema;
