import {useTheme} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {TouchableOpacity} from 'react-native';

import {SvgXml} from 'react-native-svg';
import {textType} from '../../constants/types';
import {HP} from '../../utils';
import AppText from '../appText';
import dynamicStyles from './styles';

const IconButton = ({icon, selected, handlePress, dot, name}) => {
  const theme = useTheme();
  const styles = dynamicStyles(theme.colors);

  const btnStyle = useMemo(
    () =>
      selected ? {...styles.iconStyle, backgroundColor: ''} : styles.iconStyle,
    [selected, styles.iconStyle],
  );

  return (
    <TouchableOpacity
      style={styles.iconContainer}
      onPress={handlePress}
      activeOpacity={0.7}>
      <SvgXml xml={icon} />
      <AppText
        type={textType.BODY_03}
        textStyles={{
          color: selected ? theme.colors.white : theme.colors.grey,
          marginTop: HP('1'),
        }}>
        {name}
      </AppText>
    </TouchableOpacity>
  );
};

export default IconButton;
