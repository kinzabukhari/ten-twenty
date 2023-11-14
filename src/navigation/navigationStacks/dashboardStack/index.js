import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {ScreenNameEnum} from '../../constants';
import StackScreens from '../../stackScreen';
import Dashboard from '../../../screens/dashboard';

const DashboardStack = createStackNavigator();

function DashboardStackScreens({route}) {
  return (
    <DashboardStack.Navigator
      initialRouteName={ScreenNameEnum.DASHBOARD}
      screenOptions={{
        headerShown: false,
      }}>
      {StackScreens({
        name: ScreenNameEnum.DASHBOARD,
        component: Dashboard,
        params: route.params,
      })}
    </DashboardStack.Navigator>
  );
}

export default DashboardStackScreens;
