import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Options from './screens/Options';

//global variables
EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#ffffff',
  $border: '#E2E2E2',
  $inputText: "#797979",
  $lightGray: "#F0F0F0",
  $darkText: "#343434",
})
//return a function that then returns a component

export default () => <Options />;