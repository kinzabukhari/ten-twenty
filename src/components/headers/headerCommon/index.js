import {View, Text} from 'react-native';
import React from 'react';
import AppText from '../../appText';
import dynamicStyles from './styles';
import {useTheme} from '@react-navigation/native';
import {SvgXml} from 'react-native-svg';
import search from '../../../assets/svgs/search';
import {textType} from '../../../constants/types';

const HeaderCommon = ({title}) => {
  const {colors} = useTheme();
  const styles = dynamicStyles(colors);

  return (
    <View style={styles.container}>
      <AppText type={textType.H6}>{title}</AppText>
      <SvgXml xml={search} />
    </View>
  );
};

export default HeaderCommon;
