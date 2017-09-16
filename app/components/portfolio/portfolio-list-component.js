import React, { Component } from 'react';
import {  Text, View, FlatList, TouchableHighlight } from 'react-native';
import Button from 'react-native-button'
import { PortfolioStore } from '../../stores'
import PortfolioComponent from './portfolio-component'
import PortfolioDetailComponent from './portfolio-detail-component'
import { observer, inject } from 'mobx-react/native'

@inject('store') @observer 
class PortfolioListComponent extends Component {
    
    _renderItem = ({item}) => {
        console.log(item)
        return (
        <Button onPress={() => this._onPressItem({item}) }>
            {item.name}
        </Button>

    )}

    _onPressItem = ({item}) => {
        console.log(item)
        const { navigate } = this.props.navigation;
        navigate('PortfolioDetailScreen', {portfolio: item})
    }

    _keyExtractor = (item, index) => item.name

    render() {
        const {store} = this.props
        return (
            <FlatList
                data={store.get()}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        );
    }
}

export default PortfolioListComponent