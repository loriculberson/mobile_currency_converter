import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

//global variables
EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#ffffff',
  $border: '#E2E2E2',
  $inputText: "#797979",
  $lightGray: "#F0F0F0"
})
//return a function that then returns a component

export default () => <Home />;