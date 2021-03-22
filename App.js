import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { default as theme } from './theme.json'
//import Toast from 'react-native-toast-message';


function App(props) {
  return (
    <>
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Routes />
    </NavigationContainer>
    </>
  );
}

export default App;