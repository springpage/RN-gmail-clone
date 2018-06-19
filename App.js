import React from 'react';
import Setup from './src/boot/setup';
import { Font } from 'expo';
import { View } from 'react-native';
import { Spinner } from 'native-base';

export default class App extends React.Component {
  state = { font_loading: true };
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    });
    this.setState({ font_loading: false });

    console.ignoredYellowBox = ['Setting a timer'];
  }
  render() {
    console.log('Start Run');
    if (this.state.font_loading)
      return (
        <View>
          <Spinner />
        </View>
      );
    return <Setup />;
  }
}
