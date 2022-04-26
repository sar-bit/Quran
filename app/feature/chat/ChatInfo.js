import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Header from '../../components/header/Header';
import {SCREEN_KEYS} from '../utilities/Constants';
import styles from './ChatStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
//const HOURS= 12 * 60 * 60 *1000;
function ChatInfo(props) {
  // console.log(HOURS,'HOURS')
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@user_Key');
      const name = await AsyncStorage.getItem('@user_Name');
      const email = await AsyncStorage.getItem('@user_Email');
      const timestamp = await AsyncStorage.getItem('@timestamp_key');
      if (value !== null) {
        console.log(
          value,
          name,
          email,
          timestamp,
          'userid, name, email,timestamp',
        );
      }
    } catch (e) {
      // error reading value
    }
  };

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('@user_Name');
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
    // setTimeout(()=> removeData(),HOURS)
  }, []);
  return (
    <View style={styles.chatContainer}>
      <Header page={SCREEN_KEYS.CHAT} navigation={props.navigation} />
      <View style={{justifyContent: 'center', flex: 1}}>
        <Text style={styles.textStyle}>First Payment After You Can Chat</Text>
      </View>

      <TouchableOpacity
        style={[styles.buttonActive, styles.buttonActiveColor]}
        onPress={() => props.navigation.navigate(SCREEN_KEYS.PAYMENT)}>
        <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default ChatInfo;
