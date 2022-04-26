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
    height: height / 1.5,
  },
  sliderImg: {
    width: '100%',
    height: '100%',
  },
  detailsContainer: {
    marginTop: moderateScale(10),
  },
  textHeader: {fontWeight: 'bold', fontSize: 14},
  textStyle: {
    color: colors.placeholderText,
    fontSize: 12,
  },
  noListView: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: height / 1.7,
    width: moderateScale(170),
    alignItems: 'center',
  },
  noListText: {fontWeight: 'bold', fontSize: 20},
  ncfStyle: {width: 150, height: 150},
  ncfText: {
    fontSize: 16,
    marginTop: moderateScale(20),
    color: 'grey',
    textAlign: 'center',
    fontWeight:'500'
  },
});
