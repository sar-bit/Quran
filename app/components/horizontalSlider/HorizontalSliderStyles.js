import {StyleSheet, Dimensions} from 'react-native';
import ApplicationStyles from '../../themes/ApplicationStyles';
import {moderateScale} from 'react-native-size-matters';
import colors from '../../themes/Colors';

const {height, width} = Dimensions.get('screen');
export const widths = width;

export default StyleSheet.create({
  ...ApplicationStyles,
  sliderContainer: {
    height: moderateScale(120),
   // backgroundColor: colors.placeholderText,
    paddingHorizontal: moderateScale(10),
    paddingTop: moderateScale(14),
  },
  tileView: {
    width: moderateScale(80),
    marginLeft:moderateScale(4),
    marginRight:moderateScale(4)
  },
  tilesContainer: {
    borderWidth: moderateScale(2),
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(20),
    borderColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    // padding:moderateScale(10)
  },
  tilesImgContainer: {
    width: moderateScale(65),
    height: moderateScale(65),
  },
  tilesImg: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: moderateScale(15),
  },
  textStyle: {textAlign: 'center', paddingTop: 2},
});