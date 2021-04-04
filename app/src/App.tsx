import React from 'react';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar
} from "react-native";
import ScreensNavigator from './screens/screens.navigator';
import { Store } from "./store/configure.store";
import { PersistGate } from 'redux-persist/integration/react';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

export default function App() {
  let persistor = persistStore(Store);

  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor} >
        <NavigationContainer theme={MyTheme}>
          <StatusBar barStyle="dark-content" backgroundColor="white" />
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 25}
            enabled
            style={{ flex: 1 }}>
            <ScreensNavigator />
          </KeyboardAvoidingView>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
