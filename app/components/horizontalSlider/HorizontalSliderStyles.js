import {StyleSheet, Dimensions} from 'react-native';
import ApplicationStyles from '../../themes/ApplicationStyles';
import {moderateScale} from 'react-native-size-matters';
import colors from '../../themes/Colors';

const {height, width} = Dimensions.get('screen');
export const widths = width;

export default StyleSheet.create({
  ...ApplicationStyles,
  sliderContainer: {
    height: moderateScale(100)
  },
  tileView: {
    width: moderateScale(65),
    marginLeft:moderateScale(5),
    marginRight:moderateScale(5),
    justifyContent:'center'
  },
  tilesContainer: {
    borderWidth: moderateScale(1.5),
    width: moderateScale(64),
    height: moderateScale(60),
    borderRadius: moderateScale(18),
    borderColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    // padding:moderateScale(10)
  },
  tilesImgContainer: {
    width: moderateScale(56),
    height: moderateScale(52),
  },
  tilesImg: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: moderateScale(15),
  },
  textStyle: {textAlign: 'center', paddingTop: 2,fontSize:10, fontWeight:'700'},
});
