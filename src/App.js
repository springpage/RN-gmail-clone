import React from 'react';
import { Root } from 'native-base';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Header2 from './screens/Header/2';
import SearchScreen from './screens/SearchScreen';
import ComposeMail from './screens/ComposeMail';
import Settings from './screens/Settings';

import SideBar from './screens/sidebar';

const Drawer = DrawerNavigator(
  {
    Header2: { screen: Header2 },
    Settings: { screen: Settings }
  },
  {
    initialRouteName: 'Header2',
    contentOptions: {
      activeTintColor: '#e91e63'
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = StackNavigator(
  {
    Drawer: { screen: Drawer },

    Header2: { screen: Header2 },
    ComposeMail: { screen: ComposeMail },
    SearchScreen: { screen: SearchScreen },
    Settings: { screen: Settings }
  },
  {
    initialRouteName: 'Drawer',
    headerMode: 'none'
  }
);

export default () => (
  <Root>
    <AppNavigator />
  </Root>
);
