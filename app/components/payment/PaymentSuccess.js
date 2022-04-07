import React from 'react';
import {View, Text} from 'react-native';
import styles from './PaymentStyles';

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
    </View>
  );
}

export default PaymentSuccess;
