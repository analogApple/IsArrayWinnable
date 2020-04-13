import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import MainScreen from './screens/mainScreen/MainScreen';
declare var global: {HermesInternal: null | {}};

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <MainScreen />
    </SafeAreaView>
  );
};

export default App;
