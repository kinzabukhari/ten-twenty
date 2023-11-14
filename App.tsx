import React from 'react';
import {StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {
  gestureHandlerRootHOC,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

import AppNavigation from './src/navigation';

const App = gestureHandlerRootHOC(() => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <AppNavigation />
    </GestureHandlerRootView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
