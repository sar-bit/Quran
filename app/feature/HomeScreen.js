import React from 'react';
import {Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import Header from '../components/header/Header';
import HorizontalSlider from '../components/horizontalSlider/HorizontalSlider';
import Slider from '../components/slider/Slider';
import colors from '../themes/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { SCREEN_KEYS } from './utilities/Constants';

const HomeScreen = (props) => {
  console.log(props,'props')
  return (
    <View style={styles.homeContainer}>
      <Header page={SCREEN_KEYS.HOMESCREEN} navigation={props.navigation}/>
      <HorizontalSlider />
      <Slider />
      <View style={styles.detailsContainer}>
        <Text style={styles.textHeader}>Lorem Ism is Simply</Text>
        <Text style={styles.textStyle}>
          Lorem Ism is Simply omescreen, Lorem Ism is Simply lorem Ism is Simply
        </Text>
      </View>
      <TouchableOpacity style={styles.iconStyle} onPress={()=>props.navigation.navigate(SCREEN_KEYS.PAYMENT)}>
        <Icon name="ios-chatbubble-ellipses-outline" size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    height: '100%',
    width: '100%',
  },
  detailsContainer: {
    marginHorizontal: 15,
  },
  textHeader: {fontWeight: 'bold', fontSize: 16},
  textStyle: {
    color: colors.placeholderText,
  },
  iconStyle: {
    position: 'absolute',
    right: 10,
    backgroundColor: 'green',
    bottom: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
