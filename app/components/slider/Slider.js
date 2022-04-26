import React, {Component} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import styles from './SliderStyles';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import ImageZoom from 'react-native-image-pan-zoom';
import {API} from '../../feature/utilities/Constants';
import NCF from '../../asset/images/NCF.png'; 
const {height, width} = Dimensions.get('screen');

export const widths = width;
const sliderWidth = widths;
const itemWidth = widths / 1.15;
class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      scrollable: false,
    };
    this._handlePageZoom = this._handlePageZoom.bind(this);
    this._renderItem = this._renderItem.bind(this);
    this._handleDoubleClick = this._handleDoubleClick.bind(this);
  }

  _handlePageZoom({type, scale}) {
    console.log(scale,type,'scale')
    if (scale !== 1) {
      this.setState({scrollable: false});
    } else if (scale === 1) {
      this.setState({scrollable: true});
    }
  }

  _handleDoubleClick() {
    this.setState({scrollable: !this.state.scrollable});
  }

  _renderItem = ({item, index}) => {
    return (
      <View>
        <ImageZoom
          cropWidth={itemWidth}
          cropHeight={height / 1.9}
          imageWidth={itemWidth}
          imageHeight={height / 1.9}
          onMove={this._handlePageZoom}
          onDoubleClick={this._handleDoubleClick}>
          <Image
            source={{uri: `${API.api}/${item.image}`}}
            style={styles.sliderImg}
            resizeMode="stretch"
          />
        </ImageZoom>
    
        <View style={styles.detailsContainer}>
          <Text style={styles.textHeader}>{item.title}</Text>
          <Text style={styles.textStyle}>{item.description}</Text>
        </View>
      </View>
    );
  };

  get pagination() {
    const {activeSlide} = this.state;
    const {singleSurahDetail} = this.props || {};
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
        {(this.props.singleSurahDetail === undefined ||
          this.props.singleSurahDetail.length === 0) && (
            <View style={styles.noListView}>
              <Image source={NCF} style={styles.ncfStyle}/>
              <Text style={styles.ncfText}>No Content Found</Text>
            </View>
          )}
          {this.props.singleSurahDetail != undefined &&
          <>
        <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          data={this.props.singleSurahDetail}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          // layout="default"
          scrollEnabled={this.state.scrollable}
          onSnapToItem={(index) => this.setState({activeSlide: index})}
        />
         {this.pagination}
         </>
         }
      </View>
    );
  }
}

export default Slider;
