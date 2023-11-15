import {StyleSheet} from 'react-native';

const dynamicStyles = colors => {
  return new StyleSheet.create({
    navbar: {
      flexDirection: 'row',
      borderWidth: 1,
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      overflow: 'hidden',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 30,
      backgroundColor: colors.purple,
    },
    bottomBtn: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 15,
    },
  });
};

export default dynamicStyles;
