import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import Button from 'react-native-button'
import Icon from 'react-native-vector-icons/FontAwesome'
import {PortfolioStore, CoinStore} from '../stores'

import ApplicationStyles from '../styles'

export default class NewPortfolioScreen extends Component {
    static navigationOptions = {
        tabBarVisible: false,
        title: 'New Portfolio',
    };

    constructor (props) {
        super(props)
        
    }

    componentDidMount() { 

    }

render() {
    return (
      <View style={[styles.container, ApplicationStyles.container]}>
        <Button style={ApplicationStyles.button} onPress={ ()=> null }>Save</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    textAlign: 'center',
    margin: 10
  },
});
