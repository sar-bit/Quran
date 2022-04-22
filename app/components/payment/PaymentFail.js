import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './PaymentStyles';
import masklogo from '../../asset/images/MaskLogo.png';
import cross from '../../asset/images/Cross.png';
import { SCREEN_KEYS } from '../../feature/utilities/Constants';

function PaymentFail(props) {
  console.log(props.route.params,'props')
  const {message}=props.route.params || {};
  console.log(message,'messages')
  useEffect(()=>{
    setTimeout(() => props.navigation.replace(SCREEN_KEYS.PAYMENT), 3000);
  })
  return (
    <View style={styles.paymentContainer}>
      <View style={styles.paymentContainerText}>
      <Image source={cross}/>
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

export default PaymentFail;
