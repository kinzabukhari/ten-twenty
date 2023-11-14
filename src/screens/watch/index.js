import React, {useEffect, useState} from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import LoadingIndicator from '../../components/loadingIndicator';
import axiosInstance from '../../utils/axiosHandler';
import AppText from '../../components/appText';

const Watch = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [loader, setLoader] = useState(true);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axiosInstance.get(
      '/3/movie/upcoming?api_key=7ef746d8c4e019746e9bd764931eadd5',
    );
    console.log('moviesList', res);

    if (res.data) {
      setLoader(false);
      setMoviesList(res.data.results);
    }
  };

  if (loader) <LoadingIndicator />;
  return (
    <View style={styles.container}>
      <AppText>{'item.title'}</AppText>
      <FlatList
        data={moviesList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View>
            <AppText>{item.title}</AppText>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Watch;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
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
});
