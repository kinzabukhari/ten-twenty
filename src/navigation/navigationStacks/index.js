import React, {useRef} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import {DarkTheme, LightTheme} from '../../constants/theme';
import {NavigationStacks, ScreenNameEnum} from '../constants';
import StackScreens from '../stackScreen';
import TabNavigator from '../tabNavigator';
import Trailor from '../../screens/trailor';
import CinemaTicket from '../../screens/cinemaTicket';

const RootStack = createStackNavigator();

function AppNavigation() {
  const routeNameRef = useRef(null);
  const navigationRef = useRef(null);
  const darkMode = true;

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: darkMode
            ? DarkTheme.colors.background
            : LightTheme.colors.background,
        },
      ]}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
        }}
        theme={darkMode ? DarkTheme : LightTheme}>
        <RootStack.Navigator
          initialRouteName={NavigationStacks.TABSTACK}
          screenOptions={{
            headerShown: false,
          }}>
          {StackScreens({
            name: NavigationStacks.TABSTACK,
            component: TabNavigator,
          })}
          {StackScreens({
            name: ScreenNameEnum.TRAILOR,
            component: Trailor,
          })}
          {StackScreens({
            name: ScreenNameEnum.CINEMATICKET,
            component: CinemaTicket,
          })}
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppNavigation;
