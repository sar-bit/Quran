import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Header from '../../components/header/Header';
import {SCREEN_KEYS} from '../utilities/Constants';
import {CheckBox} from 'react-native-elements';
//import { StripeProvider } from '@stripe/stripe-react-native';

const Payment = (props) => {
  const [checked, setChecked] = useState(false);
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
        style={{
          backgroundColor: 'green',
          height: 50,
          position: 'absolute',
          bottom: 15,
          width: '90%',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Payment;
