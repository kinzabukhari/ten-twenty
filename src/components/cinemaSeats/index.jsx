import React from 'react';

import {StyleSheet, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {FlatList} from 'react-native-gesture-handler';

import regularSeat from '../../assets/svgs/regularSeat';
import notAvailableSeat from '../../assets/svgs/notAvailableSeat';
import vipSeat from '../../assets/svgs/vipSeat';
import selectedSeat from '../../assets/svgs/selectedSeat';
import {HorizontalSpace} from '../../utils';
import dynamicStyles from './styles';
import {useTheme} from '@react-navigation/native';
import screen from '../../assets/svgs/screen';
import AppText from '../appText';

function CinemaSeats({seatData}) {
  const {colors} = useTheme();
  const styles = dynamicStyles(colors);

  const Seat = ({seatNo, type}) => {
    return (
      <View style={[styles.seat, styles[type]]}>
        <SvgXml
          xml={
            type == 'regular'
              ? regularSeat
              : type == 'notAvailable'
              ? notAvailableSeat
              : type == 'selected'
              ? selectedSeat
              : vipSeat
          }
        />
      </View>
    );
  };

  const SeatRow = ({data}) => {
    const totalSeats = 14; // Total seats to display in the center
    const centerIndex = Math.floor((data.length - totalSeats) / 2);
    const leftSeats = data.slice(0, centerIndex);
    const centerSeats = data.slice(centerIndex, centerIndex + totalSeats);
    const rightSeats = data.slice(centerIndex + totalSeats);

    return (
      <View style={styles.row}>
        {leftSeats.map(seat => (
          <Seat key={seat.seatNo} {...seat} />
        ))}
        <View style={styles.centerSeatsContainer}>
          {centerSeats.map(seat => (
            <Seat key={seat.seatNo} {...seat} />
          ))}
        </View>
        {rightSeats.map(seat => (
          <Seat key={seat.seatNo} {...seat} />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <SvgXml xml={screen} />
        <AppText style={styles.textStyle}>SCREEN</AppText>
      </View>
      <FlatList
        data={seatData}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <SeatRow data={item} />}
      />
    </View>
  );
}

export default CinemaSeats;
