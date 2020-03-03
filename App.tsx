import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator'
import { Provider } from 'react-native-paper'
export default function App() {
  return (
    <Provider>
        <AppNavigator />
    </Provider>
  );
}