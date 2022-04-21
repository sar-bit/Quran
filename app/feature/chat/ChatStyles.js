import {StyleSheet, Dimensions} from 'react-native';
import ApplicationStyles from '../../themes/ApplicationStyles';
import {moderateScale} from 'react-native-size-matters';
import colors from '../../themes/Colors';

const {height, width} = Dimensions.get('screen');
export const widths = width;

export default StyleSheet.create({
  ...ApplicationStyles,
  chatContainer: {
    backgroundColor: 'white',
    flex: 1,
    width: widths,
  },
  inputContainer: {marginHorizontal: 5, flex: 0.2},
  inputInnerContainer: {
    height: moderateScale(50),
    borderWidth: 0.5,
    bottom: 10,
    position: 'absolute',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: moderateScale(24),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: colors.placeholderText,
    padding: moderateScale(5),
  },
  cameraContainer: {
    width: moderateScale(38),
    height: moderateScale(38),
    borderRadius: moderateScale(19),
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatInput: {
    width: widths / 1.4,
    alignSelf: 'flex-start',
    //  borderWidth:1
  },
  messagesContainer: {
    flex: 1,
    marginTop: moderateScale(5),
  },
  messagebg: {
    borderRadius: moderateScale(4),
    marginHorizontal: moderateScale(10),
    padding: moderateScale(10),
    width: widths / 1.5,
  },
  messagebgColor: {
    backgroundColor: colors.lightGrey,
  },
  messagebgColor2: {
    backgroundColor: colors.lightgreen,
  },
  messageMargin: {
    marginLeft: widths / 5.4,
  },
  messageMargin2: {
    marginLeft: widths/1.5,
  },
  messageMargin3: {
    marginLeft: widths / 6.8,
  },
  iconcontainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    alignContent: 'flex-end',
  },

  iconcontainerColor: {
    backgroundColor: 'green',
  },
  iconcontainerColorDisable: {
    backgroundColor: 'rgba(0,128,0,0.4)',
  },
  imageContainer: {
    position: 'absolute',
    height: height,
    width: widths,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
  },
  imageInnerContainer: {
    width: moderateScale(200),
    height: moderateScale(200),
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  imageStyle2: {
    width: moderateScale(200),
    height: moderateScale(200),
  },
  imageButtonsContainer: {
    marginTop: moderateScale(15),
    width: moderateScale(200),
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: moderateScale(20),
    padding: moderateScale(5),
  },
  buttonActiveColor: {
    backgroundColor: 'green',
  },
  buttonActive: {
    height: 50,
    position: 'absolute',
    bottom: 15,
    width: '90%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '600',
    color: colors.grey,
  },
  messageOuterContainer:{
    marginBottom: moderateScale(10),
  },
  messageInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
   // paddingHorizontal:moderateScale(10)
  },
  profileContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    position:'absolute'
  },
  userAlignment:{
    right:10,
    backgroundColor:colors.grey,
  },
  adminAlignment:{
    left:10,
    backgroundColor: 'green',
  },
  timeText:{
    color:colors.placeholderText,
    fontSize:10
  }
});
