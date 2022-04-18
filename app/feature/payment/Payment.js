import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import Header from '../../components/header/Header';
import {SCREEN_KEYS} from '../utilities/Constants';
import {CheckBox} from 'react-native-elements';
import {useStripe} from '@stripe/stripe-react-native';

const Payment = (props) => {
  const [checked, setChecked] = useState(false);
  const {initPaymentSheet, presentPaymentSheet} = useStripe();
  const initializePaymentSheet = async () => {
    // const {
    //   paymentIntent,
    //   ephemeralKey,
    //   customer,
    //   publishableKey,
    // } = await fetchPaymentSheetParams();

    const {error} = await initPaymentSheet({
      customerId: 'customer',
      customerEphemeralKeySecret: 'ephemeralKey',
      paymentIntentClientSecret: 'paymentIntent',
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      // allowsDelayedPaymentMethods: true,
    });
    // if (!error) {
    //  Alert.alert(error)
    // }
    console.log('success');
  };

  const openPaymentSheet = async () => {
    const {error} = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'Your order is confirmed!');
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header page={SCREEN_KEYS.PAYMENT} navigation={props.navigation} />
      <CheckBox
        title="Stripe"
        checked={checked}
        onPress={() => setChecked((checked) => !checked)}
        textStyle={{color: '#8080ff', fontSize: 25, fontWeight: 'bold'}}
        checkedColor={'green'}
      />
      <TouchableOpacity
        style={[
          styles.buttonActive,
          checked ? styles.buttonActiveColor : styles.buttonDisableColor,
        ]}
        onPress={() => openPaymentSheet()}
        disabled={!checked}>
        <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
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
  buttonActiveColor: {
    backgroundColor: 'green',
  },
  buttonDisableColor: {
    backgroundColor: 'rgba(0,128,0,0.4)',
  },
});
