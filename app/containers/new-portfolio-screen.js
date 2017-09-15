import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import Button from 'react-native-button'
import Icon from 'react-native-vector-icons/FontAwesome'
import {PortfolioStore, CoinStore} from '../stores'
import NewPortfolioComponent from '../components/portfolio/new-portfolio-component'

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
      <NewPortfolioComponent/>
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
