import React, { Component } from 'react';
import { ImageBackground, Image, View, Dimensions } from 'react-native';
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from 'native-base';
import styles from './style';

const drawerCover = require('../../../assets/drawer-cover-3.jpg');
const drawerImage = require('../../../assets/logo-kitchen-sink-3.png');
const datas = [
  {
    name: 'Primary',
    route: 'Header2',
    icon: 'inbox',
    bg: '#C5F442',
    types: '6',
    type: 'MaterialIcons'
  },
  {
    name: 'Social',
    route: 'Header2',
    icon: 'people',
    bg: '#C5F442'
  },
  {
    name: 'Promotions',
    route: 'Header2',
    icon: 'tag',
    bg: '#C5F442',
    type: 'FontAwesome'
  },
  {
    name: 'Starred',
    route: 'Header2',
    icon: 'star',
    bg: '#C5F442',
    type: 'Entypo'
  },
  {
    name: 'Important',
    route: 'Header2',
    icon: 'label',
    bg: '#C5F442',
    type: 'MaterialIcons'
  },
  {
    name: 'Sent',
    route: 'Header2',
    icon: 'md-send',
    bg: '#C5F442',
    type: 'Ionicons'
  },
  {
    name: 'Outbox',
    route: 'Header2',
    icon: 'inbox-arrow-up',
    bg: '#C5F442',
    type: 'MaterialCommunityIcons'
  },
  {
    name: 'Drafts',
    route: 'Header2',
    icon: 'ios-paper-outline',
    bg: '#C5F442',
    type: 'Ionicons'
  },
  {
    name: 'All mail',
    route: 'Header2',
    icon: 'ios-mail',
    bg: '#C5F442',
    type: 'Ionicons'
  },
  {
    name: 'Spam',
    route: 'Header2',
    icon: 'exclamation',
    bg: '#C5F442',
    type: 'EvilIcons'
  },
  {
    name: 'Trash',
    route: 'Header2',
    icon: 'md-trash',
    bg: '#C5F442',
    type: 'Ionicons'
  },
  {
    name: 'Settings',
    route: 'Settings',
    icon: 'md-settings',
    bg: '#C5F442',
    type: 'Ionicons'
  },
  {
    name: 'Help & feedback',
    route: 'Header2',
    icon: 'question',
    bg: '#C5F442',
    type: 'SimpleLineIcons'
  }
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: '#fff', top: -1 }}
        >
          <ImageBackground source={drawerCover} style={styles.drawerCover}>
            <View style={styles.innerFrame}>
              {/* <Text style={styles.universityName}>California State University, Northridge</Text>
              <Text style={styles.universityMotto}>"CSUN Shine"</Text> */}
            </View>
          </ImageBackground>
          <Image square style={styles.drawerImage} source={drawerImage} />

          <List
            dataArray={datas}
            renderRow={data => (
              <ListItem
                style={{ height: Dimensions.get('window').width / 8 }}
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    type={data.type}
                    style={{ color: '#777', fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>{data.name}</Text>
                </Left>
                {data.types && (
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 25
                      }}
                    >
                      <Text
                        
                      >{`${data.types}`}</Text>
                    </Badge>
                  </Right>
                )}
              </ListItem>
            )}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
