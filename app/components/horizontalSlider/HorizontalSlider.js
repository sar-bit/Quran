import React,{useEffect,useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from './HorizontalSliderStyles';

const HorizontalSlider = ({setSelectedSurah}) => {
  const [allSurah, setAllSurah] = useState([]);
  const getAllSurah = async () => {
    await fetch('http://192.168.0.107:5000/api/surah/listing', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setAllSurah(data.data));
  };
  useEffect(() => {
    getAllSurah();
  }, [allSurah.length]);
console.log(allSurah,'allSurah')
  return (
    <View style={styles.sliderContainer}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {allSurah.map((item, index) => (
          <View style={styles.tileView} key={index}>
            <TouchableOpacity
              style={styles.tilesContainer}
              onPress={() => setSelectedSurah(item.title)}>
              <View style={styles.tilesImgContainer}>
                <Image
                  source={{
                    uri: 'https://images.unsplash.com/photo-1542816417-3eeda61136e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzOTQwMzQyNg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
                  }}
                  style={styles.tilesImg}
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.textStyle}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HorizontalSlider;
