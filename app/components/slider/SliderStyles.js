import {StyleSheet, Dimensions} from 'react-native';
import ApplicationStyles from '../../themes/ApplicationStyles';
import {moderateScale} from 'react-native-size-matters';
import colors from '../../themes/Colors';

const {height, width} = Dimensions.get('screen');
export const widths = width;

export default StyleSheet.create({
  ...ApplicationStyles,
  sliderContainer: {
    // height: height / 2.4,
    width: widths,
    marginTop: moderateScale(10),
    marginBottom: moderateScale(10),
  },
  slide: {
    height: moderateScale(300),
    // width: widths/1.4
  },
  sliderImg: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: moderateScale(20),
  },
});
