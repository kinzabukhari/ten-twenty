import React from 'react';

import {View} from 'react-native';
import {FlatList, TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {SvgXml} from 'react-native-svg';

import {useTheme} from '@react-navigation/native';
import notAvailableSeat from '../../assets/svgs/notAvailableSeat';
import regularSeat from '../../assets/svgs/regularSeat';
import screen from '../../assets/svgs/screen';
import selectedSeat from '../../assets/svgs/selectedSeat';
import vipSeat from '../../assets/svgs/vipSeat';
import AppText from '../appText';
import dynamicStyles from './styles';

function CinemaSeats({seatData, handleTicket}) {
  const {colors} = useTheme();
  const styles = dynamicStyles(colors);

  const Seat = ({seatNo, type}) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => handleTicket(type)}
        style={[styles.seat, styles[type]]}>
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
      </TouchableWithoutFeedback>
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
