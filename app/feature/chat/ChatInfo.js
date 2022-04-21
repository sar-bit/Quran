import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native';
import Header from '../../components/header/Header';
import {SCREEN_KEYS} from '../utilities/Constants';
import styles from './ChatStyles';

function ChatInfo(props) {
  return (
    <View style={styles.chatContainer}>
        <Header page={SCREEN_KEYS.CHAT} navigation={props.navigation} />
        <View style={{justifyContent:'center', flex:1}}>
        <Text style={styles.textStyle}>First Payment After You Can Chat</Text>
        </View>
     
      <TouchableOpacity
        style={[styles.buttonActive,styles.buttonActiveColor]}
        onPress={() => props.navigation.navigate(SCREEN_KEYS.PAYMENT)}
      >
        <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
         Continue
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ChatInfo
