import {StyleSheet, Dimensions} from 'react-native';
import ApplicationStyles from '../../themes/ApplicationStyles';
import {moderateScale} from 'react-native-size-matters';
import colors from '../../themes/Colors';

const {height, width} = Dimensions.get('screen');
export const widths = width;

export default StyleSheet.create({
  ...ApplicationStyles,
  container: {
    height: moderateScale(55),
    backgroundColor: colors.green,
    justifyContent: 'center',
    width:widths
  },
  innerContainer: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(10),
  },
  searchView: {
    width: '85%',
    flexDirection: 'row'
  },
  searchContainer: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.3)',
    height: moderateScale(30),
    borderRadius: moderateScale(6),
  },
  textInputStyle: {
    width: '85%',
    paddingLeft: moderateScale(10),
   paddingBottom:moderateScale(5),
    color: 'white',
    height:moderateScale(30)
  },
  headerText:{
    color:'white',
    textAlign:'center',
    fontWeight:'bold',
    fontSize:moderateScale(20)
  },
  alignCenter:{
    justifyContent:'center'
  }
});
