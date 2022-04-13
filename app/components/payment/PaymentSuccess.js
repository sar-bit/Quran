import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './PaymentStyles';
import masklogo from '../../asset/images/MaskLogo.png';

function PaymentSuccess() {
  return (
    <View style={styles.paymentContainer}>
      <View style={styles.paymentContainerText}>
        <Text style={styles.paymentHeader}>Payment Successful</Text>
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
