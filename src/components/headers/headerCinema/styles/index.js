import {StyleSheet} from 'react-native';
import {HP, HorizontalSpace, WP} from '../../../../utils';

const dynamicStyles = colors => {
  return new StyleSheet.create({
    container: {
      marginHorizontal: HorizontalSpace,
      height: HP('8'),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    titleStyle: {
      alignItems: 'center',
      marginLeft: WP('-5'),
    },
    subTitleStyle: {
      color: colors.lightBlue,
    },
  });
};

export default dynamicStyles;
