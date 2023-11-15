import {StyleSheet} from 'react-native';

const dynamicStyles = colors => {
  return new StyleSheet.create({
    iconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};

export default dynamicStyles;
