import {StyleSheet} from 'react-native';
import {HP, HorizontalSpace, WindowWidth} from '../../../utils';

const dynamicStyles = colors => {
  return new StyleSheet.create({
    container: {
      marginTop: HP('8'),
    },
    subContainer: {
      marginBottom: HP('2'),
    },
    seat: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 5,
    },
    centerSeatsContainer: {
      marginHorizontal: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    textStyle: {
      position: 'absolute',
      left: WindowWidth() * 0.37,
      top: 10,
    },
  });
};

export default dynamicStyles;
