import {StyleSheet} from 'react-native';
import {HP, HorizontalSpace, WP, WindowWidth} from '../../../utils';

const dynamicStyles = colors => {
  return new StyleSheet.create({
    container: {flex: 1},
    seatContainer: {
      flex: 0.8,
      backgroundColor: colors.greyBg,
      justifyContent: 'center',
      alignItems: 'center',
    },
    listStyle: {
      flex: 0.2,
      marginVertical: HP('5'),
      marginHorizontal: HorizontalSpace,
    },
    imageStyle: {
      height: 20,
      width: 20,
    },
    listContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: HP('2'),
    },
    subContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: WindowWidth() * 0.4,
    },
    textStyles: {
      marginLeft: WP('3'),
    },
    footerContainer: {
      flexDirection: 'row',
      paddingHorizontal: HorizontalSpace,
      marginBottom: HP('1'),
    },
    totalPriceStyle: {
      backgroundColor: colors.lightGrey,
      borderRadius: 10,
      width: '30%',
      justifyContent: 'center',
      marginRight: WP('3'),
      paddingHorizontal: WP('5'),
    },
    textPriceStyles: {
      fontWeight: 'bold',
    },
  });
};

export default dynamicStyles;
