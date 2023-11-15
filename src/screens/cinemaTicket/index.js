import React from 'react';

import {useTheme} from '@react-navigation/native';
import {Alert, Image, View} from 'react-native';

import notAvailable from '../../assets/pngs/notAvailable.png';
import regular from '../../assets/pngs/regular.png';
import selected from '../../assets/pngs/selected.png';
import vip from '../../assets/pngs/vip.png';

import {AppButton, AppText, CinemaSeats, HeaderCinema} from '../../components';

import seatData from '../../utils/mockData';

import {textType} from '../../constants/types';
import dynamicStyles from './styles';

const CinemaTicket = () => {
  const {colors} = useTheme();
  const styles = dynamicStyles(colors);

  const handleTicket = type => {
    switch (type) {
      case 'regular':
        Alert.alert('Want to book regular seat?');
        break;
      case 'notAvailable':
        Alert.alert('This is seat is not available');
        break;
      case 'selected':
        Alert.alert('This is already selected');
        break;
      case 'vip':
        Alert.alert('This is a vip seat');
        break;
      default:
        break;
    }
  };

  return (
    <>
      <HeaderCinema
        title={'The King’s Man'}
        subTitle={'March 5, 2021  I  12:30 hall 1'}
      />
      <View style={styles.container}>
        <View style={styles.seatContainer}>
          <CinemaSeats seatData={seatData} handleTicket={handleTicket} />
        </View>

        <View style={styles.listStyle}>
          <View style={styles.listContainer}>
            <View style={styles.subContainer}>
              <Image source={selected} style={styles.imageStyle} />
              <AppText textStyles={styles.textStyles}>Selected</AppText>
            </View>
            <View style={styles.subContainer}>
              <Image source={notAvailable} style={styles.imageStyle} />
              <AppText textStyles={styles.textStyles}>Not Available</AppText>
            </View>
          </View>
          <View style={styles.listContainer}>
            <View style={styles.subContainer}>
              <Image source={vip} style={styles.imageStyle} />
              <AppText textStyles={styles.textStyles}>VIP ($150)</AppText>
            </View>
            <View style={styles.subContainer}>
              <Image source={regular} style={styles.imageStyle} />
              <AppText textStyles={styles.textStyles}>Regular ($50)</AppText>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.footerContainer}>
        <View style={styles.totalPriceStyle}>
          <AppText type={textType.BODY_04}>Total Price</AppText>
          <AppText textStyles={styles.textPriceStyles}>$ 0</AppText>
        </View>
        <AppButton title="Proceed to pay" />
      </View>
    </>
  );
};

export default CinemaTicket;
