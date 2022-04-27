import React,{useEffect,useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from './HorizontalSliderStyles';
import {API} from '../../feature/utilities/Constants';

const HorizontalSlider = ({getSingleSurah}) => {
  const [allSurah, setAllSurah] = useState([]);
  const getAllSurah = async () => {
    await fetch(`${API.api}/api/surah/listing`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {setAllSurah(data.data),getSingleSurah(data.data[0]._id)});
  };
  useEffect(() => {
    getAllSurah();
  }, [allSurah.length]);

  return (
    <View style={styles.sliderContainer}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {allSurah.map((item, index) => (
          <View style={styles.tileView} key={index}>
            <TouchableOpacity
              style={styles.tilesContainer}
              onPress={() => {getSingleSurah(item._id)}}>
              <View style={styles.tilesImgContainer}>
                <Image
                  source={{
                    uri: `${API.api}/${item.image}`
                  }}
                  style={styles.tilesImg}
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.textStyle} numberOfLines={1}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HorizontalSlider;
