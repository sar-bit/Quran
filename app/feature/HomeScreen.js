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
import {SCREEN_KEYS,API} from './utilities/Constants';
import showToast from './utilities/DialogUtils';
const {height, width} = Dimensions.get('screen');
export const widths = width;

const HomeScreen = (props) => {
  const [singleSurahDetail, setSingleSurahDetails] = useState([]);
  const [selectedSurah, setSelectedSurah] = useState('625d693bdc08cc51309e563b');
  const [loader, setLoader] = useState(true);

  const getSingleSurah = async () => {
    setLoader(true);
    await fetch(
      `${API.api}/api/surah/content/${selectedSurah}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
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

  useEffect(() => {
    getSingleSurah();
  }, [selectedSurah]);

  return (
    <View style={styles.homeContainer}>
      <Header
        page={SCREEN_KEYS.HOMESCREEN}
        navigation={props.navigation}
        setSingleSurahDetails={(res) => setSingleSurahDetails(res)}
        setLoader={(res) => setLoader(res)}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <HorizontalSlider setSelectedSurah={(res) => setSelectedSurah(res)} />
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
        onPress={() => props.navigation.navigate(SCREEN_KEYS.USERINFO)}>
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
