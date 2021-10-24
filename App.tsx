import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import LoadingScreen from 'components/LoadingScreen';
import { StatusBar } from 'expo-status-bar';
import { Box, NativeBaseProvider } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from 'redux/stores';
import DetailScreen from 'screens/detail/DetailScreen';
import GlobalStyles from 'utils/styles';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
    primary: 'rgb(255, 45, 85)',
  },
};

export default function App() {
  return (
    <SafeAreaProvider
      style={[
        styles.root,
        GlobalStyles.AndroidSafeArea,
        GlobalStyles.IOsSafeArea,
      ]}
    >
      <Provider store={store}>
        <NativeBaseProvider>
          <NavigationContainer theme={MyTheme}>
            <StatusBar style="auto" />
            <DetailScreen />
          </NavigationContainer>
        </NativeBaseProvider>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
