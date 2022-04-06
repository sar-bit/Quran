import React, {Component} from 'react';
import {Text, View, Image,StyleSheet} from 'react-native';
//import logo from '../Images/logo-new.png';
import {SCREEN_KEYS} from '../feature/utilities/Constants';

class Splash extends Component {
  componentDidMount() {
    const {navigation} = this.props;
    setTimeout(() => navigation.replace(SCREEN_KEYS.HOMESCREEN), 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.landingimg}>
          <Image source={logo} resizeMode="cover" />
        </View> */}
        <View style={styles.loginContainer}>
          <Text style={styles.title}>Quran</Text>
        </View>
      </View>
    );
  }
}

export default Splash;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 34,
    marginTop: '5%',
    color:'white',
    fontWeight:'bold'
  },

  container: {
    //paddingTop: '2%',
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 1,
    paddingLeft: '5%',
    paddingRight: '5%',
    backgroundColor:'green',
    width:'100%'
  },
});
