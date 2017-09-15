import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import Button from 'react-native-button'
import Icon from 'react-native-vector-icons/FontAwesome'
import {PortfolioStore, CoinStore} from '../stores'
import PortfolioListComponent from '../components/portfolio/portfolio-list-component'

import ApplicationStyles from '../styles'

export default class PortfoliosScreen extends Component {
    static navigationOptions = {
        tabBarVisible: true,
        title: 'Portfolios',
        tabBarIcon: ({tintColor}) => (
        <Icon name='rocket' color={tintColor} size={24}/>
        )
    };

    componentDidMount() { 

    }

render() {
    return (
      <View style={[styles.container, ApplicationStyles.container]}>
      <PortfolioListComponent store={PortfolioStore} />
             <Button style={ApplicationStyles.button} onPress={ ()=> this.props.navigation.navigate('NewPortfolioScreen') }>
              New Portfolio
            </Button>
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
