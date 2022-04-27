import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import Header from '../../components/header/Header';
import {SCREEN_KEYS, API} from '../utilities/Constants';
import styles from './ChatStyles';
import io from 'socket.io-client';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';

const userType = 'user';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMsg: '',
      messages: [],
      ShowBottomspace: false,
      imageupload: false,
      paymentSuccess: false,
      chatImage: '',
      userId: '',
    };
    this.FlatlistRef = React.createRef();
  }

  getUserMessages = () => {
    fetch(`${API.api}/api/user/getChat/${this.state.userId}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => this.setState({messages: res.data}));
  };

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@user_Key');
      if (value !== null) {
        this.setState({userId: value});
        fetch(`${API.api}/api/user/getChat/${value}`, {
          method: 'GET',
        })
          .then((res) => res.json())
          .then((res) => this.setState({messages: res.data}));
      }
    } catch (e) {
      // error reading value
    }
  };

  componentDidMount() {
    this.getData();
    this.getUserMessages();
    this.socket = io(`${API.api}`, {jsonp: false});
    this.socket.connect();
    this.socket.on('connect', () => console.log('connected'));
  }

  submitChatMessage() {
    this.socket.emit('chatMessage', {
      message: this.state.chatMsg,
      userType,
      user: this.state.userId,
    });
    this.setState({chatMsg: ''});
    this.getUserMessages();
  }

  render() {
    return (
      <View style={styles.chatContainer}>
        <Header page={SCREEN_KEYS.CHAT} navigation={this.props.navigation} />
        <View style={styles.messagesContainer}>
          {this.state.messages != undefined && (
            <FlatList
              ref={this.FlatlistRef}
              data={this.state.messages}
              renderItem={({item, index}) => (
                <View style={styles.messageOuterContainer}>
                  <View style={styles.messageInnerContainer}>
                    <View
                      style={[
                        styles.messagebg,
                        item.userType === 'user'
                          ? styles.messagebgColor2
                          : styles.messagebgColor,
                        item.userType === 'user'
                          ? styles.messageMargin
                          : styles.messageMargin3,
                      ]}>
                      <Text style={[]} key={index}>
                        {item.message}
                      </Text>
                    </View>

                    <View
                      style={[
                        styles.profileContainer,
                        item.userType === 'user'
                          ? styles.userAlignment
                          : styles.adminAlignment,
                      ]}>
                      <Text style={{color: 'white', fontWeight: 'bold'}}>
                        {item.userType === 'user' ? 'U' : 'A'}
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={[
                      styles.timeText,
                      item.userType === 'user'
                        ? styles.messageMargin2
                        : styles.messageMargin,
                    ]}>
                    {moment(item.createdAt).format('LT')}
                  </Text>
                </View>
              )}
              onContentSizeChange={() => this.FlatlistRef.current.scrollToEnd()}
              onLayout={() => this.FlatlistRef.current.scrollToEnd()}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputInnerContainer}>
            <TextInput
              style={styles.chatInput}
              autoCorrect={false}
              placeholder="Message"
              value={this.state.chatMsg}
              onChangeText={(chatMsg) => {
                this.setState({chatMsg});
              }}
              // editable={this.state.paymentSuccess ? true : false}
            />
            <TouchableOpacity
              onPress={() => this.submitChatMessage()}
              disabled={this.state.chatMsg === '' ? true : false}>
              <View
                style={[
                  styles.iconcontainer,
                  this.state.chatMsg === ''
                    ? styles.iconcontainerColorDisable
                    : styles.iconcontainerColor,
                ]}>
                <Ionicons name="send" size={16} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Chat;
