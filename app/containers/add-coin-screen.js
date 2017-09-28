import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import Button from 'react-native-button'
import Icon from 'react-native-vector-icons/FontAwesome'
import AddCoinComponent from '../components/coin/add-coin'
import { Provider } from 'mobx-react/native'
import ApplicationStyles from '../styles'

export default class AddCoinScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        tabBarVisible: false,
        title: 'Add Coin',
    });

    render() {
        return (
            <AddCoinComponent 
                stores={this.props.screenProps}
                navigation={this.props.navigation}
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
