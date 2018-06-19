import React, { Component } from 'react';
import {
  Container,
  Header,
  Button,
  Icon,
  Item,
  Input,
  Content,
  Text,
  Left,
  Body,
  Right
} from 'native-base';
import styles from './styles';

class SearchScreen extends Component {
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
            <Item style={{ borderBottomWidth: 0 }}>
              <Input placeholder="Search mail" />
            </Item>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="microphone" type="Foundation" />
            </Button>
          </Right>
        </Header>

        <Content padder />
      </Container>
    );
  }
}

export default SearchScreen;
