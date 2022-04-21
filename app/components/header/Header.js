import React, {Component} from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './HeaderStyles';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as Animatable from 'react-native-animatable';
import {SCREEN_KEYS,API} from '../../feature/utilities/Constants';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchClick: false,
      search: '',
    };
    this.controller;
  }
  getSearch = async () => {
    this.props.setLoader(true);
    await fetch(
      `${API.api}/api/surah/content/search/${this.state.search}`,
      {
        method: 'GET',
      },
    )
      .then((res) => res.json())
      .then((res) => {
        this.props.setSingleSurahDetails(res.data), this.props.setLoader(false);
      });
  };

  render() {
    const {page, navigation} = this.props || {};
    const {search} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Icon
            name="chevron-left"
            size={40}
            color="white"
            onPress={() => navigation.goBack()}
          />
          {page === SCREEN_KEYS.HOMESCREEN ? (
            <View style={styles.searchView}>
              {this.state.searchClick && (
                <Animatable.View
                  style={styles.searchContainer}
                  animation={this.state.searchClick && 'slideInRight'}>
                  <TextInput
                    placeholder="Search"
                    style={styles.textInputStyle}
                    placeholderTextColor={'white'}
                    value={search}
                    onChangeText={(res) => this.setState({search: res})}
                  />
                </Animatable.View>
              )}
              <Icon
                name="search"
                size={30}
                color="white"
                onPress={() => {
                  this.setState({searchClick: true}),
                    this.state.searchClick && this.getSearch();
                }}
                style={{position: 'absolute', right: 10}}
              />
            </View>
          ) : (
            <View style={[styles.searchView, styles.alignCenter]}>
              <Text style={styles.headerText}>{page}</Text>
            </View>
          )}
        </View>
      </View>
    );
  }
}

export default Header;
