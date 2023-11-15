import {StyleSheet} from 'react-native';
import {HP, HorizontalSpace, WP, WindowWidth} from '../../../utils';

const dynamicStyles = colors => {
  return new StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: HP('2'),
      backgroundColor: colors.lightBlue,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonTextStyle: {
      color: colors.white,
    },
  });
};

export default dynamicStyles;
