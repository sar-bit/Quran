import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import Header from '../components/header/Header';
import HorizontalSlider from '../components/horizontalSlider/HorizontalSlider';
import Slider from '../components/slider/Slider';
import colors from '../themes/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {SCREEN_KEYS, API} from './utilities/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
const {height, width} = Dimensions.get('screen');
export const widths = width;

const HomeScreen = (props) => {
  const [singleSurahDetail, setSingleSurahDetails] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loader, setLoader] = useState(true);

  const getSingleSurah = async (surahId) => {
    setLoader(true);
    await fetch(`${API.api}/api/surah/content/${surahId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // if (data.data === undefined) {
        //   showToast(data.message);
        // } else {
        setSingleSurahDetails(data.data);
        // }
        setLoader(false);
      });
  };

  const getData = async () => {
    try {
      const name = await AsyncStorage.getItem('@user_Name');
      const email = await AsyncStorage.getItem('@user_Email');
      const timestamp = await AsyncStorage.getItem('@timestamp_key');
      const newTimestamp = timestamp != null ? JSON.parse(timestamp) : null;

      if (newTimestamp !== null) {
        let a = moment();
        let b = moment(newTimestamp);
        let hours = a.diff(b, 'hours');
console.log(hours,'hours')
        if (hours >= 12) {
          await AsyncStorage.removeItem('@user_Name');
          await AsyncStorage.removeItem('@user_Email');
        } else {
          setEmail(email);
          setName(name);
        }
      }
    } catch (e) {
      // error reading value
    }
  };

  const addUser = async () => {
    fetch(`${API.api}/api/user/create`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 1) {
          if (res.data.payment_status === false) {
            props.navigation.navigate(SCREEN_KEYS.CHATINFO);
          } else {
            props.navigation.navigate(SCREEN_KEYS.CHAT);
          }
        }
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.homeContainer}>
      <Header
        page={SCREEN_KEYS.HOMESCREEN}
        navigation={props.navigation}
        setSingleSurahDetails={(res) => setSingleSurahDetails(res)}
        setLoader={(res) => setLoader(res)}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <HorizontalSlider
          getSingleSurah={getSingleSurah}
        />
        {loader ? (
          <View
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              height: height / 1.7,
            }}>
            <ActivityIndicator size="large" color={colors.green} />
          </View>
        ) : (
          <Slider singleSurahDetail={singleSurahDetail} />
        )}
      </ScrollView>

      <TouchableOpacity
        style={styles.iconStyle}
        onPress={() => {
          (name !== '' && email !== '')
            ? addUser()
            : props.navigation.navigate(SCREEN_KEYS.USERINFO);
        }}>
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
    backgroundColor: 'white',
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
