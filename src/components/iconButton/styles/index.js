import {StyleSheet} from 'react-native';

const dynamicStyles = colors => {
  return new StyleSheet.create({
    iconStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 50,
      borderRadius: 12,
      height: 35,
      // backgroundColor: colors.blue,
    },
  });
};

export default dynamicStyles;
