import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Button from 'react-native-button'
import {inject, observer} from 'mobx-react/native'

@inject('coinStore') @observer
export default class CoinDetailComponent extends Component {

    render() {
        const {coin} = this.props.navigation.state.params
        console.log(this.props)
        const {coinStore} = this.props
        return (
            <View>
                <Text>{coin.name} | {coin.symbol} | {coin.holdings}</Text>
                <Text>{coin.id}</Text>
            </View>
        );
    }
}