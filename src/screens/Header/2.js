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
  Card,
  CardItem,
  List,
  ListItem,
  Item
} from 'native-base';
import { Alert } from 'react-native';
import styles from './styles';
const arrayOfMail = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
class Header2 extends Component {
  Circle(text) {
    let randomColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
    while (randomColor.length < 7) randomColor += '1';

    randomColor = randomColor.toString();
    console.log(randomColor);
    return <View style={[styles.circle, { backgroundColor: randomColor }]} />;
  }

  showAlert = () => {
    Alert.alert('123');
  };

  render() {
    console.log('#' + (((1 << 24) * Math.random()) | 0).toString(16));
    return (
      <Container style={styles.container}>
        <Header
          style={{ backgroundColor: '#dc4239' }}
          androidStatusBarColor="#dc2015"
          iosBarStyle="light-content"
        >
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('DrawerOpen')}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Primary</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('SearchScreen')}
            >
              <Icon name="search" />
            </Button>
          </Right>
        </Header>

        <Content padder>
          <List
            dataArray={arrayOfMail}
            renderRow={mail => (
              <ListItem button={true} onPress={() => Alert.alert('123')} avatar>
                <Left>{this.Circle('I')}</Left>
                <Body>
                  <Text>Google+</Text>
                  <Text note>Welcome to Google+!</Text>
                  <Text note>Explore the topics you ...</Text>
                </Body>
                <Right>
                  <Text note>16:08</Text>

                  <Icon active name="star" />
                </Right>
              </ListItem>
            )}
          />
        </Content>
        <View style={{}}>
          <Fab
            active
            direction="up"
            containerStyle={{}}
            style={{ backgroundColor: '#dd4b39' }}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('ComposeMail')}
          >
            <Icon type="MaterialCommunityIcons" name="pencil" />
          </Fab>
        </View>
      </Container>
    );
  }
}

export default Header2;
