import {StyleSheet} from 'react-native';

const dynamicStyles = colors => {
  return new StyleSheet.create({
    navbar: {
      flexDirection: 'row',
      borderWidth: 1,
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      borderColor: '#282C49',
      overflow: 'hidden',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 30,
      backgroundColor: colors.purple,
    },
    bottomBtn: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 25,
    },
  });
};

export default dynamicStyles;
