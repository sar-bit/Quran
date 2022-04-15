import React, {Component} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import styles from './SliderStyles';
import Carousel, {Pagination} from 'react-native-snap-carousel';
const {height, width} = Dimensions.get('screen');
export const widths = width;
const sliderWidth = widths;
const itemWidth = widths / 1.3;
class Slider extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeSlide:0
    };

  }
 
  _renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <Image source={{uri: `http://192.168.0.107:5000/${item.imagePath}`}} style={styles.sliderImg} />
        <View style={styles.detailsContainer}>
          <Text style={styles.textHeader}>{item.title}</Text>
          <Text style={styles.textStyle}>
           {item.description}
          </Text>
        </View>
      </View>
    );
  };

  get pagination() {
    const {activeSlide} = this.state;
    const {singleSurahDetail} = this.props ||{};
    return (
      <Pagination
        dotsLength={singleSurahDetail.length}
        activeDotIndex={activeSlide}
        containerStyle={{backgroundColor: 'white'}}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(0, 0, 0, 0.92)',
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  render() {
    return (
      <View style={styles.sliderContainer}>
        <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          data={this.props.singleSurahDetail}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          //layout={'tinder'}
          onSnapToItem={(index) => this.setState({activeSlide: index})}
        />
        {/* {this.pagination} */}
      </View>
    );
  }
}

export default Slider;
