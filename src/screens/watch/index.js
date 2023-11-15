import React, {useEffect, useState} from 'react';

import {FlatList, Image, Touchable, View} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';

import AppText from '../../components/appText';
import LoadingIndicator from '../../components/loadingIndicator';
import axiosInstance from '../../utils/axiosHandler';

import dynamicStyles from './styles';
import {textType} from '../../constants/types';
import {HeaderCommon} from '../../components';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {ScreenNameEnum} from '../../navigation/constants';

const Watch = () => {
  const navigation = useNavigation();

  const [moviesList, setMoviesList] = useState([]);
  const [loader, setLoader] = useState(true);
  const {colors} = useTheme();

  const styles = dynamicStyles(colors);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axiosInstance.get(
      '3/movie/upcoming?api_key=7ef746d8c4e019746e9bd764931eadd5',
    );
    if (res.data) {
      setLoader(false);
      setMoviesList(res.data.results);
    }
  };

  if (loader) return <LoadingIndicator />;

  return (
    <>
      <HeaderCommon title={'Watch'} />

      <FlatList
        data={moviesList}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({item}) => (
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate(ScreenNameEnum.CINEMATICKET)}>
            <AppText textStyles={styles.titleStyle} type={textType.H6}>
              {item.title}
            </AppText>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
              }}
              resizeMode="cover"
              style={styles.imageStyle}
            />
          </TouchableWithoutFeedback>
        )}
      />
    </>
  );
};

export default Watch;
