import React, {useState, useCallback, useEffect, Component} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Header from '../../components/header/Header';
import {SCREEN_KEYS} from '../utilities/Constants';
import styles, {widths} from './ChatStyles';
import {GiftedChat} from 'react-native-gifted-chat';
import io from 'socket.io-client';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {loadImage} from '../../components/chat/ImageUpload';
const userId = 'user';
const isMyMessage = userId === 'user';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: '',
      messages: [],
      ShowBottomspace: false,
      imageupload: false,
      paymentSuccess: true,
      chatImage: '',
    };
    this.FlatlistRef = React.createRef();
  }

  loadImageHandler = () => {
    loadImage()
      .then((image) => {
        console.log(image, 'image');
        // setislandImage(image);
        this.setState({chatImage: image});
        this.setState({imageupload: true});
      })
      .catch((er) => {
        console.log(er);
      });
  };

  componentDidMount() {
    this.socket = io('http://192.168.0.107:5000');
    console.log('in component mount');
    // setMessages([
    //   {
    //     _id: 1,
    //     text: 'Hello developer',
    //     createdAt: new Date(),
    //     user: {
    //       _id: 2,
    //       name: 'React Native',
    //       avatar: 'https://placeimg.com/140/140/any',
    //     },
    //   },
    // ]);

    // this.socket = io("http://127.0.0.1:3000");
    this.socket.connect();
    this.socket.on('connect', () => console.log('connected'));
    this.socket.on('chat message', (msg) => {
      console.log(msg, 'msg');
      this.setState({messages: [...this.state.messages, msg.meggageInfo]});
    });
  }

  submitChatMessage() {
    this.socket.emit('chat message', {
      meggageInfo: {message: this.state.chatMessage, userId},
    });
    this.setState({chatMessage: ''});
  }

  submitChatImage() {
    this.socket.emit('chat message', {
      meggageInfo: {message: this.state.chatImage, userId},
    });
    this.setState({chatImage: '', imageupload: false});
  }

  render() {
    return (
      <View style={styles.chatContainer}>
        <Header page={SCREEN_KEYS.CHAT} navigation={this.props.navigation} />
        <View style={styles.messagesContainer}>
          <FlatList
            ref={this.FlatlistRef}
            data={this.state.messages}
            renderItem={({item, index}) => (
              <View
                style={[
                  styles.messagebg,
                  isMyMessage ? styles.messagebgColor2 : styles.messagebgColor,
                  isMyMessage ? styles.messageMargin : null,
                ]}>
                {typeof item.message === 'string' ? (
                  <Text style={[]} key={index}>
                    {item.message}
                  </Text>
                ) : (
                  <Image
                    source={{uri: item.message.uri}}
                    style={styles.imageStyle2}
                  />
                )}
              </View>
            )}
            onContentSizeChange={() => this.FlatlistRef.current.scrollToEnd()}
            onLayout={() => this.FlatlistRef.current.scrollToEnd()}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputInnerContainer}>
            <TouchableOpacity
              style={styles.cameraContainer}
              onPress={() => this.loadImageHandler()}
              //</View> disabled={this.state.paymentSuccess ? true : false}
            >
              <Icons name="camera" size={20} color="white" />
            </TouchableOpacity>
            <TextInput
              style={styles.chatInput}
              autoCorrect={false}
              placeholder="Message"
              value={this.state.chatMessage}
              onChangeText={(chatMessage) => {
                this.setState({chatMessage});
              }}
              editable={this.state.paymentSuccess ? true : false}
            />
            <TouchableOpacity
              onPress={() => this.submitChatMessage()}
              disabled={this.state.chatMessage === '' ? true : false}>
              <View
                style={[
                  styles.iconcontainer,
                  this.state.chatMessage === ''
                    ? styles.iconcontainerColorDisable
                    : styles.iconcontainerColor,
                ]}>
                <Ionicons name="send" size={14} color="white" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate(SCREEN_KEYS.PAYMENT)
              }
              disabled={this.state.paymentSuccess ? true : false}>
              <View
                style={[
                  styles.iconcontainer,
                  this.state.paymentSuccess
                    ? styles.iconcontainerColorDisable
                    : styles.iconcontainerColor,
                ]}>
                <MaterialIcon name="payment" size={15} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {this.state.imageupload && (
          <View style={styles.imageContainer}>
            <View style={styles.imageInnerContainer}>
              <Image
                source={{uri: this.state.chatImage.uri}}
                style={styles.imageStyle}
              />
            </View>
            <View style={styles.imageButtonsContainer}>
              <TouchableOpacity onPress={() => this.submitChatImage()}>
                <View
                  style={[
                    styles.iconcontainer,
                    this.state.chatMessage === ''
                      ? styles.iconcontainerColorDisable
                      : styles.iconcontainerColor,
                  ]}>
                  <Ionicons name="close" size={25} color="white" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.submitChatImage()}>
                <View
                  style={[
                    styles.iconcontainer,
                    this.state.chatMessage === ''
                      ? styles.iconcontainerColorDisable
                      : styles.iconcontainerColor,
                  ]}>
                  <Ionicons name="send" size={14} color="white" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  }
}

export default Chat;
