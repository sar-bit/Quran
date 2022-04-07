import React, {useState, useCallback, useEffect} from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/header/Header';
import {SCREEN_KEYS} from '../utilities/Constants';
import styles from './ChatStyles';
import {GiftedChat} from 'react-native-gifted-chat';

const Chat = (props) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  return (
   <View style={styles.chatContainer}>
      <Header page={SCREEN_KEYS.CHAT} navigation={props.navigation} />
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        scrollToBottomStyle={{backgroundColor: 'green'}}
      />
    </View>
  );
};

export default Chat;
