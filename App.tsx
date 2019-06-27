import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './pages/home';
import Campaign from './pages/campaign';
import { createStore } from 'redux';
import { Store } from './store';

import { Provider } from 'mobx-react';
import { PersistGate } from 'redux-persist/integration/react';

const navigator = createStackNavigator({ Home, Campaign }, {initialRouteName: 'Campaign'});
const App = createAppContainer(navigator);
const store = Store.create();

export default () => (
  <Provider store={store}>
        <App />
  </Provider>
)
