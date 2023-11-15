import React, {useState} from 'react';

import {Button, FlatList, Image, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

import notAvailable from '../../assets/pngs/notAvailable.png';
import regular from '../../assets/pngs/regular.png';
import selected from '../../assets/pngs/selected.png';
import vip from '../../assets/pngs/vip.png';

import {
  CinemaSeats,
  HeaderCinema,
  AppText,
  LoadingIndicator,
  AppButton,
} from '../../components';

import seatData from '../../utils/mockData';

import dynamicStyles from './styles';
import {textType} from '../../constants/types';

const subContainerData = [
  {
    iconName: selected,
    title: 'Selected',
  },
  {
    iconName: notAvailable,
    title: 'Not Available',
  },
  {
    iconName: vip,
    title: 'vip ($150)',
  },
  {
    iconName: regular,
    title: 'Regular ($50)',
  },
];

const CinemaTicket = ({title}) => {
  const {colors} = useTheme();
  const styles = dynamicStyles(colors);
  const [loader, setLoader] = useState(true);

  const renderItem = ({item}) => {
    return (
      <View style={styles.subContainer}>
        <Image source={item.iconName} style={styles.imageStyle} />
        <AppText>{item.title}</AppText>
      </View>
    );
  };

  if (loader) <LoadingIndicator />;

  return (
    <>
      <HeaderCinema
        title={'The King’s Man'}
        subTitle={'March 5, 2021  I  12:30 hall 1'}
      />
      <View style={styles.container}>
        <View style={styles.seatContainer}>
          <CinemaSeats seatData={seatData} />
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
          <AppText textStyles={styles.textPriceStyles}>$ 50</AppText>
        </View>
        <AppButton title="Proceed to pay" />
      </View>
    </>
  );
};

export default CinemaTicket;
