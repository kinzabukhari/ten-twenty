import React from 'react';

import {TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';

import AppText from '../appText';
import {textType} from '../../constants/types';

import dynamicStyles from './styles';

const AppButton = ({onPress, title, activeOpacity}) => {
  const {colors} = useTheme();
  const styles = dynamicStyles(colors);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={activeOpacity ? activeOpacity : 0.7}>
      <AppText type={textType.BODY_01} textStyles={styles.buttonTextStyle}>
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

export default AppButton;
