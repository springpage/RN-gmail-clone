const React = require('react-native');
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  drawerCover: {
    alignSelf: 'stretch',
    height: deviceHeight / 3.5,
    width: null,
    position: 'relative',
    marginBottom: 10,
    opacity: 0.8
  },
  drawerImage: {
    position: 'absolute',
    left: Platform.OS === 'android' ? deviceWidth / 14 : deviceWidth / 13,
    top: Platform.OS === 'android' ? deviceHeight / 14 : deviceHeight / 13,
    width: 75,
    height: 75,
    resizeMode: 'cover'
  },
  text: {
    fontWeight: Platform.OS === 'ios' ? '500' : '400',
    fontSize: 16,
    marginLeft: 20
  },
  badgeText: {
    fontSize: Platform.OS === 'ios' ? 13 : 11,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: Platform.OS === 'android' ? -3 : undefined
  },
  innerFrame: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, .5)'
  },

  universityImage: {
    width: 300,
    height: 250,
    borderRadius: 5
  },
  universityName: {
    color: '#fff',
    opacity: 0.9,
    fontSize: 20,
    textAlign: 'left',
    fontWeight: '500',
    marginVertical: 15,
    backgroundColor: 'transparent'
  },
  universityMotto: {
    color: '#fff',
    opacity: 0.9,
    textAlign: 'left',
    backgroundColor: 'transparent'
  }
};
