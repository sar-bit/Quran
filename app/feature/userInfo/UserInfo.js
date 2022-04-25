import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import colors from '../../themes/Colors';
import Icons from 'react-native-vector-icons/FontAwesome';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import {SCREEN_KEYS, API} from '../utilities/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserInfo = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  let buttonenable = name === '' || email === '' ? false : true;

  const validateEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@user_Key', value);
    } catch (e) {
      // saving error
    }
  };

  const addUser = async () => {
    const newEmail = validateEmail(email);
    if (newEmail) {
      setError('');
      fetch(`${API.api}/api/user/create`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          storeData(res.data.user._id);
          if (res.status === 1) {
            if (res.data.payment_status === false) {
              props.navigation.navigate(SCREEN_KEYS.CHATINFO);
            } else {
              props.navigation.navigate(SCREEN_KEYS.CHAT);
            }
          }
        });
    } else setError('Enter Valid Email!!');
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={[styles.textInputContainer, styles.containerMarginTop]}>
        <Text style={{fontSize: 26, fontWeight: 'bold'}}>Loreum Ipsm</Text>
        <Text style={{fontSize: 14, color: colors.grey, marginTop: 5, fontWeight:'900'}}>
          Loreum Ipsm Loreum Ipsm Loreum Ipsm Loreum Ipsm Loreum Ipsm.
        </Text>
      </View>
      <View style={[styles.textInputContainer, styles.containerMarginTop]}>
        <View style={styles.textInputStyle}>
          <Icons name="user" size={20} color="green" style={styles.iconStyle} />
          <TextInput
            placeholder="Name"
            style={styles.inputStyle}
            value={name}
            onChangeText={(res) => setName(res)}
          />
        </View>
        <View style={styles.textInputStyle}>
          <IonicIcons
            name="mail"
            size={20}
            color="green"
            style={styles.iconStyle}
          />
          <TextInput
            placeholder="Email"
            style={styles.inputStyle}
            value={email}
            onChangeText={(res) => setEmail(res)}
          />
        </View>
      </View>
      <Text style={{textAlign: 'center', color: 'red'}}>{error}</Text>
      <TouchableOpacity
        style={[
          styles.buttonActive,
          buttonenable ? styles.buttonActiveColor : styles.buttonDisableColor,
        ]}
        onPress={() => addUser()}
        disabled={!buttonenable}>
        <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  containerMarginTop: {
    marginTop: moderateScale(40),
  },
  textInputContainer: {
    marginHorizontal: moderateScale(20),
  },
  textInputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: colors.placeholderText,
    marginBottom: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft:moderateScale(15),
    paddingVertical:moderateScale(5)
  },
  iconStyle: {width: moderateScale(25)},
  inputStyle: {height: 40, width: '90%'},
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
