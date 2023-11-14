import {useTheme} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import dynamicStyles from './styles';
import AppText from '../appText';

const IconButton = ({icon, selected, handlePress, dot, name}) => {
  const theme = useTheme();
  const styles = dynamicStyles(theme.colors);

  const btnStyle = useMemo(
    () =>
      selected ? {...styles.iconStyle, backgroundColor: ''} : styles.iconStyle,
    [selected, styles.iconStyle],
  );

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
      <View style={btnStyle}>
        {icon == 'dashboard' ? (
          <MaterialIcons name="dashboard" size={25} />
        ) : icon == 'watch' ? (
          <AntDesign name="youtube" size={25} />
        ) : null}
      </View>
      <AppText>{name}</AppText>
    </TouchableOpacity>
  );
};

export default IconButton;
