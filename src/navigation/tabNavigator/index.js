import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {NavigationStacks} from '../constants';
import DashboardStackScreens from '../navigationStacks/dashboardStack';
import WatchStackScreens from '../navigationStacks/watchStack';
import MoreStackScreens from '../navigationStacks/moreStack';
import MediaStackScreens from '../navigationStacks/mediaStack';
import TabBarComponent from '../../components/tabBarComponent';

const Tab = createBottomTabNavigator();

const getTabBarVisible = route => {
  const params = route.params;
  if (params) {
    if (params.tabBarVisible === false) {
      return false;
    }
  }
  return true;
};

function TabNavigator() {
  return (
    <>
      <Tab.Navigator
        tabBar={props =>
          getTabBarVisible(props?.state?.routes[0]) ? (
            <TabBarComponent
              activeIndex={props.state.index}
              routeName={props.state.routeNames}
            />
          ) : null
        }
        defaultScreenOptions={{tabBarHideOnKeyboard: true}}
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            backgroundColor: 'transparent',
          },
        }}
        initialRouteName={NavigationStacks.WATCHSTACK}>
        <Tab.Screen
          name={NavigationStacks.DASHBOARDSTACK}
          component={DashboardStackScreens}
        />

        <Tab.Screen
          name={NavigationStacks.WATCHSTACK}
          component={WatchStackScreens}
        />

        <Tab.Screen
          name={NavigationStacks.MEDIASTACK}
          component={MediaStackScreens}
        />

        <Tab.Screen
          name={NavigationStacks.MORESTACK}
          component={MoreStackScreens}
        />
      </Tab.Navigator>
    </>
  );
}

export default TabNavigator;
