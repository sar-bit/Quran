import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {StyleSheet, Dimensions, Platform, StatusBar} from 'react-native';
import colors from './Colors';

const {height, width} = Dimensions.get('screen');
export const widths = width;

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  logo: {
    height: moderateScale(180),
    width: moderateScale(180),
  },

  horizontalCenter: {
    alignItems: 'center',
    width: '100%',
  },
  verticalCenter: {
    alignItems: 'center',
  },
  horizontalLeft: {
    alignItems: 'flex-start',
    width: '100%',
  },
  verticalStart: {
    justifyContent: 'flex-start',
  },

  itemsLeftAlign: {
    justifyContent: 'flex-start',
  },
  horizontalContainer: {
    flexDirection: 'row',
  },
  verticalRowItemsCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  positionCenter: {
    position: 'absolute',
    alignSelf: 'center',
  },

  buttonContainer: {
    width: '80%',
  },
  containerwidth: {
    width: '100%',
  },
  containerwidth3: {
    width: '50%',
  },
  containerwidth4: {
    width: '90%',
  },
  containerwidth5: {
    width: '10%',
  },
  containerwidth6: {
    width: '45%',
  },
  containerwidth7: {
    width: '49%',
  },
  containerwidth2: {
    width: '100%',
    marginBottom: moderateScale(8),
    marginTop: moderateScale(8),
  },

  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TextalignCenter: {
    textAlign: 'center',
  },
  appName: {
    // fontSize: Fonts.size.h0,
    fontFamily: 'yu-gothic-Bold',
  },
  innerContainer: {
    width: '75%',
  },
  rowSpaceEvenly: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  rowSpacBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  centerbox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowSpaceAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rowCenterItems: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  headingtext: {
    color: colors.heading1,

    //  fontSize: Fonts.size.h2,
    fontFamily: 'yu-gothic-Bold',
    textAlign: 'center',
  },
  positionright: {
    position: 'absolute',
    right: 0,
  },
  containermargin: {
    marginLeft: moderateScale(15),
    marginRight: moderateScale(15),
  },
  leftbottomcurve: {
    height: moderateScale(150),
    width: moderateScale(150),
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
};

export default ApplicationStyles;
