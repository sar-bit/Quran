import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  TextInput,
  Dimensions,
} from 'react-native';
import Header from '../../components/header/Header';
import {SCREEN_KEYS} from '../utilities/Constants';
import {CheckBox} from 'react-native-elements';
import {useStripe} from '@stripe/stripe-react-native';
import {moderateScale} from 'react-native-size-matters';
import colors from '../../themes/Colors';

const {height, width} = Dimensions.get('screen');
export const widths = width;

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
    <View style={{flex: 1, backgroundColor: 'white', height: height}}>
      <View style={{height: height / 1.25}}>
        <Header page={SCREEN_KEYS.PAYMENT} navigation={props.navigation} />
        {/* <CheckBox
        title="Stripe"
        checked={checked}
        onPress={() => setChecked((checked) => !checked)}
        textStyle={{color: '#8080ff', fontSize: 25, fontWeight: 'bold'}}
        checkedColor={'green'}
      /> */}
        <View style={styles.cardContainer}>
          <Text style={styles.headerTextStyle}>Card Number</Text>
          <TextInput placeholder="Card Number" style={styles.textInputStyle} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{width: '45%', marginRight: moderateScale(10)}}>
              <Text style={styles.headerTextStyle}>Expire Date</Text>
              <TextInput
                placeholder="Expire Date"
                style={styles.textInputStyle}
              />
            </View>
            <View style={{width: '45%', marginLeft: moderateScale(10)}}>
              <Text style={styles.headerTextStyle}>CVV</Text>
              <TextInput
                placeholder="CVV"
                style={styles.textInputStyle}
                keyboardType="numeric"
              />
            </View>
          </View>
          <Text style={styles.headerTextStyle}>Name On Card</Text>
          <TextInput placeholder="Name On Card" style={styles.textInputStyle} />
        </View>
      </View>
      <TouchableOpacity
        style={[
          styles.buttonActive,
          checked ? styles.buttonActiveColor : styles.buttonDisableColor,
        ]}
        onPress={() => openPaymentSheet()}
        //disabled={!checked}
      >
        <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
          Pay
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: moderateScale(15),
    marginTop: moderateScale(50),
  },
  headerTextStyle: {
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: moderateScale(10),
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: colors.placeholderText,
    borderRadius: moderateScale(5),
    paddingLeft: moderateScale(10),
    marginBottom: moderateScale(10),
  },
  buttonActive: {
    height: 50,
    // position: 'absolute',
    //bottom: 15,
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
