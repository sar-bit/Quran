import {StyleSheet, Dimensions} from 'react-native';

import ApplicationStyles from '../themes/ApplicationStyles';
import { moderateScale } from 'react-native-size-matters';


const {height, width} = Dimensions.get('screen');
export const widths = width;

export default StyleSheet.create({

    ...ApplicationStyles,
    tabIcon:{
        width:moderateScale(26),
        height:moderateScale(26),
       //borderRadius:moderateScale(100),
    },
    

})
