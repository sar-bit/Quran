import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import logo from '../asset/images/Logo.png';
import masklogo from '../asset/images/MaskLogo.png';
import {SCREEN_KEYS} from '../feature/utilities/Constants';
import colors from '../themes/Colors';

const {height, width} = Dimensions.get('screen');
export const widths = width;

class Splash extends Component {
  componentDidMount() {
    const {navigation} = this.props;
    setTimeout(() => navigation.replace(SCREEN_KEYS.HOMESCREEN), 3000);
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: colors.green}}>
        <View style={styles.container}>
          <Image source={logo} resizeMode="cover" />
        </View>
        <View style={styles.bgImageContainer}>
          <Image source={masklogo} style={styles.bgImageStyle} />
        </View>
      </View>
    );
  }
}

export default Splash;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 1,
  },
  bgImageContainer: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  bgImageStyle: {
    width: widths,
    height: height,
  },
});
