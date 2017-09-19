import React, { Component } from 'react';
import {  Text, View, FlatList, TouchableHighlight } from 'react-native';
import Button from 'react-native-button'
import { PortfolioStore } from '../../stores'
import PortfolioDetailComponent from './portfolio-detail-component'
import { observer, inject } from 'mobx-react/native'

@inject('portfolioStore') @observer 
class PortfolioListComponent extends Component {
    
    _renderItem = ({item}) => (
        <Button onPress={() => this._onPressItem({item}) }>
            {item.name}
        </Button>
    )

    _onPressItem = ({item}) => {
        const { navigate } = this.props.navigation;
        navigate('PortfolioDetailScreen', {portfolio: item})
    }

    _keyExtractor = (item, index) => item.name

    render() {
        const {portfolioStore} = this.props
        console.log(this.props)
        return (
            <FlatList
                data={portfolioStore.get()}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        );
    }
}

export default PortfolioListComponent