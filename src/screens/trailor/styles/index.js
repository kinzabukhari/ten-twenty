import {StyleSheet} from 'react-native';
import {HP, HorizontalSpace, WindowWidth} from '../../../utils';

const dynamicStyles = colors => {
  return new StyleSheet.create({
    container: {
      paddingHorizontal: HorizontalSpace,
      backgroundColor: colors.greyBg,
      paddingVertical: HP('4'),
    },
    imageStyle: {
      width: WindowWidth() * 0.9,
      height: HP('20'),
      borderRadius: 10,
      position: 'relative',
    },
    titleStyle: {
      color: colors.textWhite,
      position: 'absolute',
      left: 20,
      bottom: 10,
      zIndex: 1,
    },
    separator: {
      height: 10,
    },
  });
};

export default dynamicStyles;
