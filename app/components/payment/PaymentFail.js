import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './PaymentStyles';
import masklogo from '../../asset/images/MaskLogo.png';
import cross from '../../asset/images/Cross.png';

function PaymentFail() {
  return (
    <View style={styles.paymentContainer}>
      <View style={styles.paymentContainerText}>
      <Image source={cross}/>
        <Text style={styles.paymentHeader}>Payment Failed</Text>
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
