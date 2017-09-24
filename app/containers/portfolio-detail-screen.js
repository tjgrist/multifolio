import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import Button from 'react-native-button'
import Icon from 'react-native-vector-icons/FontAwesome'
import {PortfolioStore, CoinStore} from '../stores'
import PortfolioDetailComponent from '../components/portfolio/portfolio-detail'
import Provider from 'mobx-react/native'

import ApplicationStyles from '../styles'

export default class PortfolioDetailScreen extends Component {
    static navigationOptions = {
        tabBarVisible: false,
        title: 'Portfolio Detail',
    };

    render() {
        console.log(this.props)
        return (
        <PortfolioDetailComponent 
          navigation={this.props.navigation}
          portfolioStore={PortfolioStore}
          coinStore={CoinStore}
        />
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
