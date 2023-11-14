import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import More from '../../../screens/more';
import {ScreenNameEnum} from '../../constants';
import StackScreens from '../../stackScreen';

const MoreStack = createStackNavigator();

function MoreStackScreens({route}) {
  return (
    <MoreStack.Navigator
      initialRouteName={ScreenNameEnum.MORE}
      screenOptions={{
        headerShown: false,
      }}>
      {StackScreens({
        name: ScreenNameEnum.MORE,
        component: More,
        params: route.params,
      })}
    </MoreStack.Navigator>
  );
}

export default MoreStackScreens;
