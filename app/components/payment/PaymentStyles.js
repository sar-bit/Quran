import {StyleSheet, Dimensions} from 'react-native';
import ApplicationStyles from '../../themes/ApplicationStyles';
import {moderateScale} from 'react-native-size-matters';
import colors from '../../themes/Colors';

const {height, width} = Dimensions.get('screen');
export const widths = width;

export default StyleSheet.create({
  ...ApplicationStyles,
  paymentContainer: {
    height: height,
    width: widths,
    backgroundColor: 'green',
  },
  paymentContainerText: {
    flex: 1,
    // width:widths/1.3,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: moderateScale(20),
  },
  paymentHeader: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#EFEDED',
    marginBottom: moderateScale(15),
  },
  paymentMessage: {
    fontSize: 12,
    color: '#EFEDED',
    lineHeight: moderateScale(15),
    textAlign: 'center',
  },
  bgImageContainer: {
    position: 'absolute',
    bottom: 60,
  },
  bgImageStyle: {
    width: widths,
    height: height,
  },
});
