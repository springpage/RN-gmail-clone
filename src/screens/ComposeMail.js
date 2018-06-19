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
  ActionSheet
} from 'native-base';
import styles from './styles';
var BUTTONS = [
  'Add from Contacts',
  'Save draft',
  'Discard',
  'Settings',
  'Help & feedback'
];

class ComposeMail extends Component {
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
            <Title>Compose</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon type="MaterialCommunityIcons" name="attachment" />
            </Button>
            <Button transparent>
              <Icon name="md-send" />
            </Button>
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
          <Form>
            <Item inlineLabel>
              <Label>From</Label>
              <Input />
            </Item>
            <Item inlineLabel>
              <Label>To</Label>
              <Input />
            </Item>
            <Item>
              <Input placeholder="Subject" />
            </Item>
            <Item>
              <Input
                multiline={true}
                numberOfLines={10}
                style={{
                  height: 500,
                  textAlignVertical: 'top',
                  paddingTop: 30
                }}
                placeholder="Compose email"
              />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default ComposeMail;
