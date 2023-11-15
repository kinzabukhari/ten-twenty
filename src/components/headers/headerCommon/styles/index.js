import {StyleSheet} from 'react-native';
import {HP, HorizontalSpace} from '../../../../utils';

const dynamicStyles = colors => {
  return new StyleSheet.create({
    container: {
      marginHorizontal: HorizontalSpace,
      height: HP('8'),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });
};

export default dynamicStyles;
