import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Watch from '../../../screens/watch';
import {ScreenNameEnum} from '../../constants';
import StackScreens from '../../stackScreen';

const WatchStack = createStackNavigator();

function WatchStackScreens({route}) {
  return (
    <WatchStack.Navigator
      initialRouteName={ScreenNameEnum.WATACH}
      screenOptions={{
        headerShown: false,
      }}>
      {StackScreens({
        name: ScreenNameEnum.WATACH,
        component: Watch,
        params: route.params,
      })}
    </WatchStack.Navigator>
  );
}

export default WatchStackScreens;
