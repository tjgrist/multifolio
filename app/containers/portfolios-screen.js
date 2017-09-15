import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import Button from 'react-native-button'
import Icon from 'react-native-vector-icons/FontAwesome'
import {PortfolioStore, CoinStore} from '../stores'

import ApplicationStyles from '../styles'

export default class PortfolioStoresScreen extends Component {
    static navigationOptions = {
        tabBarVisible: true,
        title: 'Portfolios',
        tabBarIcon: ({tintColor}) => (
        <Icon name='rocket' color={tintColor} size={24}/>
        )
    };

    constructor (props) {
        super(props)
        this.dataSrc = PortfolioStore.get()
    }

    componentDidMount() { 

    }

render() {
    return (
      <View style={[styles.container, ApplicationStyles.container]}>
        <FlatList
            data={this.dataSrc}
            renderItem={({item}) => <Text>{item.name}</Text>}
            keyExtractor={(item, index) => index}
            />
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
