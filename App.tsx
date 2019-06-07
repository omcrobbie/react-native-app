import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './pages/home';
import Campaign from './pages/campaign';
import { createStore } from 'redux';
import rootReducer from './store';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import styled from 'styled-components';

const navigator = createStackNavigator({ Home, Campaign }, {initialRouteName: 'Campaign'});
const App = createAppContainer(navigator);
const store = createStore(rootReducer);
const persistor = persistStore(store);

export default () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
        <App />
    </PersistGate>
  </Provider>
)
