import {StyleSheet, Dimensions} from 'react-native';
import ApplicationStyles from '../../themes/ApplicationStyles';
import {moderateScale} from 'react-native-size-matters';
import colors from '../../themes/Colors';

const {height, width} = Dimensions.get('screen');
export const widths = width;

export default StyleSheet.create({
  ...ApplicationStyles,
  sliderContainer: {
    width: widths,
    marginTop: moderateScale(5),
  },
  slide: {
    height: height / 2.2
  },
  sliderImg: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: moderateScale(10),
  },
});
