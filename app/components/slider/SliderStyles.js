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
    height: height / 1.5
  },
  sliderImg: {
    width: '100%',
    height: '100%',
    borderRadius:moderateScale(1.5)
  },
  detailsContainer: {
    marginTop: moderateScale(10),
  },
  textHeader: {fontWeight: 'bold', fontSize: 14},
  textStyle: {
    color: colors.placeholderText,
    fontSize:12
  },
  noListView:{
    alignSelf: 'center',
    justifyContent: 'center',
    height: height / 1.7,
  },
  noListText:{fontWeight:'bold', fontSize:20}
});
