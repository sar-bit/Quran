import React, { useEffect } from 'react';
import {View, Text, Image} from 'react-native';
import styles from './PaymentStyles';
import masklogo from '../../asset/images/MaskLogo.png';
import tickmark from '../../asset/images/TickMark.png';
import { SCREEN_KEYS } from '../../feature/utilities/Constants';


const PaymentSuccess=(props)=> {
  const {message}=props.route.params || {};

  useEffect(()=>{
    setTimeout(() => props.navigation.replace(SCREEN_KEYS.CHAT), 3000);
  })
  return (
    <View style={styles.paymentContainer}>
      <View style={styles.paymentContainerText}>
        <Image source={tickmark}/>
        <Text style={styles.paymentHeader}>{message}</Text>
        <Text style={styles.paymentMessage}>
          Lorem Ism is Simply omescreen, Lorem Ism is Simply lorem Ism is Simply
          Lorem Ism is Simply omescreen, Lorem Ism is Simply lorem Ism is Simply
          Lorem Ism
        </Text>
      </View>
      <View style={styles.bgImageContainer}>
        <Image source={masklogo} style={styles.bgImageStyle} />
      </View>
    </View>
  );
}

export default PaymentSuccess;
