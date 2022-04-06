import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import styles from './HeaderStyles';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as Animatable from 'react-native-animatable';

class Header extends Component {
  state = {
    searchClick: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Icon name="chevron-left" size={40} color="white" />
          <View style={styles.searchView}>
            {this.state.searchClick && (
              <Animatable.View
                style={styles.searchContainer}
                animation={this.state.searchClick && 'slideInRight'}>
                <TextInput
                  placeholder="Search"
                  style={styles.textInputStyle}
                  placeholderTextColor={'white'}
                />
              </Animatable.View>
            )}
            <Icon
              name="search"
              size={30}
              color="white"
              onPress={() => this.setState({searchClick: true})}
              style={{position: 'absolute', right: 10}}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Header;
