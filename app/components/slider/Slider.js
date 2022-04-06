import React, {Component} from 'react';
import {View, Text,Image,Dimensions} from 'react-native';
import styles from './SliderStyles';
import Carousel from 'react-native-snap-carousel';
const {height, width} = Dimensions.get('screen');
export const widths = width;
const sliderWidth = widths;
const itemWidth = widths/1.4;
class Slider extends Component {
  state = {
    entries: [
      {
        title: 'A',
        imageUrl:
          'https://images.unsplash.com/photo-1629992101753-56d196c8aabb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMzQ2NzEwMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
      },
      {
        title: 'Abcdefgh',
        imageUrl:
          'https://images.unsplash.com/photo-1542816417-3eeda61136e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzOTQwMzQyNg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
      },
      {
        title: 'A',
        imageUrl:
          'https://images.unsplash.com/photo-1629992101753-56d196c8aabb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMzQ2NzEwMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
      },
    ],
  };
  _renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <Image source={{uri:item.imageUrl}} style={styles.sliderImg}/>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.sliderContainer}>
        <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          data={this.state.entries}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />
      </View>
    );
  }
}

export default Slider;
