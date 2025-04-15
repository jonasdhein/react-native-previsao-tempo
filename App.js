import 'react-native-gesture-handler';
import React from 'react';
//import { StatusBar } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import Toast from 'react-native-toast-message';


function App() {
  return (
    <>
    <NavigationContainer>
      <StatusBar style="dark"/>
      <Routes />
    </NavigationContainer>
    <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
  );
}

export default App;