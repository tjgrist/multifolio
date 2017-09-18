import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { observer } from 'mobx-react/native'
import Button from 'react-native-button'

@observer
export default class CoinDetailComponent extends Component {

    constructor (props){
        super(props)
        console.log(this.props)
    }

    render() {
        const {coin} = this.props.navigation.state.params
        console.log(coin)
        return (
            <View>
                <Text>{coin.name}</Text>
            </View>
        );
    }
}