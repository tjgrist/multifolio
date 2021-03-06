import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Button from 'react-native-button'
import {inject, observer} from 'mobx-react/native'

@observer
export default class CoinDetailComponent extends Component {
    
    constructor(props) {
        super(props)
        const {coin} = this.props.navigation.state.params
        this.state = {
            coin: coin
        }
    }
    
    render() {
        return (
            <View>
                <Text>{this.state.coin.name} | {this.state.coin.symbol} | {this.state.coin.holdings} | {this.state.coin.value}</Text>
            </View>
        );
    }
}