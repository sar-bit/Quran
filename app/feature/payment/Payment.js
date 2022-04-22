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
import {API, SCREEN_KEYS} from '../utilities/Constants';
import {useStripe} from '@stripe/stripe-react-native';
import {moderateScale} from 'react-native-size-matters';
import colors from '../../themes/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {height, width} = Dimensions.get('screen');
export const widths = width;

const Payment = (props) => {
  const [userId, setUserId] = useState('');
  const [cardNo, setCardNo] = useState('');
  const [expMonth, setExpMonth] = useState('');
  const [expYear, setExpYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [userName, setUserName] = useState('');

  let checked =
    cardNo === '' ||
    expMonth === '' ||
    expYear === '' ||
    cvv === '' ||
    userName === ''
      ? false
      : true;

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@user_Key');
      if (value !== null) {
        setUserId(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  const handlePayment = async () => {
    fetch(`${API.api}/api/payment/create`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        card_no: cardNo,
        exp_month: expMonth,
        exp_year: expYear,
        cvc: cvv,
        card_holder_name: userName,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 1) {
          props.navigation.navigate(SCREEN_KEYS.PAYSUCCESS, {
            message: res.message,
          });
        } else {
          props.navigation.navigate(SCREEN_KEYS.PAYMENTFAIL, {
            message: res.message,
          });
        }
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white', height: height}}>
      <View style={{height: height / 1.25}}>
        <Header page={SCREEN_KEYS.PAYMENT} navigation={props.navigation} />
        
        <View style={styles.cardContainer}>
          <Text style={styles.headerTextStyle}>Card Number</Text>
          <TextInput
            placeholder="Card Number"
            style={styles.textInputStyle}
            keyboardType="numeric"
            value={cardNo}
            onChangeText={(res) => setCardNo(res)}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{width: '45%', marginRight: moderateScale(10)}}>
              <Text style={styles.headerTextStyle}>Expire Date</Text>
              <View
                style={[
                  styles.textInputStyle,
                  {
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                ]}>
                <TextInput
                  placeholder="M"
                  style={{height: '100%', width: '30%'}}
                  maxLength={2}
                  keyboardType="numeric"
                  value={expMonth}
                  onChangeText={(res) => setExpMonth(res)}
                />
                <Text style={{color: colors.placeholderText}}>/</Text>
                <TextInput
                  placeholder="Y"
                  style={{height: '100%', width: '30%'}}
                  maxLength={2}
                  keyboardType="numeric"
                  autoFocus={!expMonth === '' ? true : false}
                  value={expYear}
                  onChangeText={(res) => setExpYear(res)}
                />
              </View>
            </View>
            <View style={{width: '45%', marginLeft: moderateScale(10)}}>
              <Text style={styles.headerTextStyle}>CVV</Text>
              <TextInput
                placeholder="CVV"
                style={styles.textInputStyle}
                keyboardType="numeric"
                maxLength={4}
                value={cvv}
                onChangeText={(res) => setCvv(res)}
              />
            </View>
          </View>
          <Text style={styles.headerTextStyle}>Name On Card</Text>
          <TextInput
            placeholder="Name On Card"
            style={styles.textInputStyle}
            value={userName}
            onChangeText={(res) => setUserName(res)}
          />
        </View>
      </View>
      <TouchableOpacity
        style={[
          styles.buttonActive,
          checked ? styles.buttonActiveColor : styles.buttonDisableColor,
        ]}
        onPress={() => handlePayment()}
        disabled={!checked}
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
