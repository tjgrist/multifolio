import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import Button from 'react-native-button'
import Icon from 'react-native-vector-icons/FontAwesome'
import {PortfolioStore, CoinStore} from '../stores'
import CoinDetailComponent from '../components/coin/coin-detail-component'

import ApplicationStyles from '../styles'

export default class CoinDetailScreen extends Component {
    static navigationOptions = {
        tabBarVisible: false,
        title: 'Coin Detail',
    };

    render() {
        return (
        <CoinDetailComponent navigation={this.props.navigation}/>
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
