import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import regularSeat from '../../assets/svgs/regularSeat';
import notAvailableSeat from '../../assets/svgs/notAvailableSeat';
import vipSeat from '../../assets/svgs/vipSeat';
import selectedSeat from '../../assets/svgs/selectedSeat';
import {FlatList} from 'react-native-gesture-handler';

function CinemaSeats({seatData}) {
  const Seat = ({seatNo, type}) => {
    console.log('seat', seatNo);

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
        {/* <Text>{seat}</Text> */}
      </View>
    );
  };

  const SeatRow = ({data}) => {
    const centerIndex = Math.floor(data.length / 2);
    const leftSeats = data.slice(0, centerIndex);
    const centerSeats = data.slice(centerIndex, centerIndex + 2);
    const rightSeats = data.slice(centerIndex + 2);
    // console.log('leftSeats', leftSeats);
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
      <FlatList
        data={seatData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <SeatRow data={item} />}
      />
    </View>
  );
}

export default CinemaSeats;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 20,
  },
  seat: {
    // width: 30,
    // height: 30,
    // margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
  },
  // regular: {backgroundColor: '#eee'},
  // notAvailable: {backgroundColor: '#ccc'},
  // selected: {backgroundColor: '#66ff66'},
  // vip: {backgroundColor: '#ffcc00'},
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
});
