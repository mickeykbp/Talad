import 'react-native-gesture-handler';
import React from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from './navigations/AppNavigator';
import {Colors} from './src/theme/colors'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...Colors,
  },
};

export default function App() {

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
    </PaperProvider>
  );
};


registerRootComponent(App);

