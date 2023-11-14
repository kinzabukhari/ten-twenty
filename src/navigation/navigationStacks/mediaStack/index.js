import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Media from '../../../screens/media';
import {ScreenNameEnum} from '../../constants';
import StackScreens from '../../stackScreen';

const MediaStack = createStackNavigator();

function MediaStackScreens({route}) {
  return (
    <MediaStack.Navigator
      initialRouteName={ScreenNameEnum.MEDIA}
      screenOptions={{
        headerShown: false,
      }}>
      {StackScreens({
        name: ScreenNameEnum.MEDIA,
        component: Media,
        params: route.params,
      })}
    </MediaStack.Navigator>
  );
}

export default MediaStackScreens;
