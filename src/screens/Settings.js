import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text,
  Fab,
  View,
  Input,
  Item,
  Form,
  Label,
  ActionSheet,
  ListItem
} from 'native-base';
import styles from './styles';
import { Alert } from 'react-native';
var BUTTONS = ['Manage Accounts', 'Help & feedback'];

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header
          style={{ backgroundColor: '#dc4239', elevation: 3 }}
          androidStatusBarColor="#dc2015"
          iosBarStyle="light-content"
        >
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Settings</Title>
          </Body>
          <Right>
            <Button
              onPress={() =>
                ActionSheet.show(
                  {
                    options: BUTTONS,
                    title: 'Select an option'
                  },
                  buttonIndex => {
                    this.setState({ clicked: BUTTONS[buttonIndex] });
                  }
                )
              }
              transparent
            >
              <Icon type="MaterialCommunityIcons" name="dots-vertical" />
            </Button>
          </Right>
        </Header>

        <Content padder>
          <ListItem onPress={() => Alert.alert('123')}>
            <Text>General Settings</Text>
          </ListItem>
          <ListItem onPress={() => Alert.alert('123')}>
            <Text>Yourmail@gmail.com</Text>
          </ListItem>
          <ListItem onPress={() => Alert.alert('123')}>
            <Text>Add account</Text>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

export default Settings;
