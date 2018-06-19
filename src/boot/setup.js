import React, { Component } from 'react';
import { StyleProvider } from 'native-base';
import { View } from 'react-native';
import App from '../App';
import getTheme from '../theme/components';
import variables from '../theme/variables/commonColor';
import { Constants } from 'expo';

export default class Setup extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
        <App />
      </StyleProvider>
    );
  }
}
