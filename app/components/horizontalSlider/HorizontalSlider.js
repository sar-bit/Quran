import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './HorizontalSliderStyles';
import footware from '../../asset/images/footware.jpg';

const HorizontalSlider = () => {
  return (
    <View style={styles.sliderContainer}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.tileView}>
          <View style={styles.tilesContainer}>
            <View style={styles.tilesImgContainer}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1542816417-3eeda61136e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzOTQwMzQyNg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
                }}
                style={styles.tilesImg}
              />
            </View>
          </View>
          <Text style={styles.textStyle}>Surah_1</Text>
        </View>
        <View style={styles.tileView}>
          <View style={styles.tilesContainer}>
            <View style={styles.tilesImgContainer}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
                }}
                style={styles.tilesImg}
              />
            </View>
          </View>
          <Text style={styles.textStyle}>Surah_1</Text>
        </View>
        <View style={styles.tileView}>
          <View style={styles.tilesContainer}>
            <View style={styles.tilesImgContainer}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1513001900722-370f803f498d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0OTMxOTcwMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
                }}
                style={styles.tilesImg}
              />
            </View>
          </View>
          <Text style={styles.textStyle}>Surah_1</Text>
        </View>
        <View style={styles.tileView}>
          <View style={styles.tilesContainer}>
            <View style={styles.tilesImgContainer}>
              <Image source={{
                  uri: 'https://images.unsplash.com/photo-1542816417-3eeda61136e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzOTQwMzQyNg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
                }} style={styles.tilesImg} />
            </View>
          </View>
          <Text style={styles.textStyle}>Surah_1</Text>
        </View>
        <View style={styles.tileView}>
          <View style={styles.tilesContainer}>
            <View style={styles.tilesImgContainer}>
              <Image  source={{
                  uri: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
                }} style={styles.tilesImg} />
            </View>
          </View>
          <Text style={styles.textStyle}>Surah_1</Text>
        </View>
        <View style={styles.tileView}>
          <View style={styles.tilesContainer}>
            <View style={styles.tilesImgContainer}>
              <Image source={footware} style={styles.tilesImg} />
            </View>
          </View>
          <Text style={styles.textStyle}>Surah_1</Text>
        </View>
        <View style={styles.tileView}>
          <View style={styles.tilesContainer}>
            <View style={styles.tilesImgContainer}>
              <Image source={footware} style={styles.tilesImg} />
            </View>
          </View>
          <Text style={styles.textStyle}>Surah_1</Text>
        </View>
        <View style={styles.tileView}>
          <View style={styles.tilesContainer}>
            <View style={styles.tilesImgContainer}>
              <Image source={footware} style={styles.tilesImg} />
            </View>
          </View>
          <Text style={styles.textStyle}>Surah_1</Text>
        </View>
        <View style={styles.tileView}>
          <View style={styles.tilesContainer}>
            <View style={styles.tilesImgContainer}>
              <Image source={footware} style={styles.tilesImg} />
            </View>
          </View>
          <Text style={styles.textStyle}>Surah_1</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HorizontalSlider;
