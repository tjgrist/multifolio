import React, { Component } from 'react';
import {  Text, View, FlatList, TouchableHighlight } from 'react-native';
import Button from 'react-native-button'
import PortfolioDetailComponent from './portfolio-detail-component'
import { observer, inject } from 'mobx-react/native'

@inject('rootStore') @observer 
class PortfolioListComponent extends Component {
    
    constructor (props) {
        super(props)
    }

    _renderItem = ({item}) => {
        return (
            <View>
                <Button onPress={() => this._onPressItem({item}) }>
                    {item.name}
                </Button>
                <Text>${item.value}</Text>
            </View>
        )
    }

    _onPressItem = ({item}) => {
        const { navigate } = this.props.navigation;
        navigate('PortfolioDetailScreen', {portfolio: item})
    }

    _keyExtractor = (item, index) => item.name

    render() {
        const {rootStore} = this.props
        return (
            <FlatList
                data={rootStore.portfolioStore.portfolios}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        );
    }
}

export default PortfolioListComponent