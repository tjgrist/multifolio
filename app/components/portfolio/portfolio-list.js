import React, { Component } from 'react';
import {  Text, View, FlatList, TouchableHighlight, ActivityIndicator } from 'react-native';
import Button from 'react-native-button'
import PortfolioDetailComponent from './portfolio-detail'
import { observer, inject, Provider } from 'mobx-react/native'
import NewPortfolioComponent from './new-portfolio'

import { Container, Content, Button as Btn, Icon } from 'native-base';

@inject('rootStore') @observer 
class PortfolioListComponent extends Component {

    renderItem = ({item}) => {
        return (
            <View>
                <Button onPress={() => this.onPressItem({item}) }>
                    <Text>{item.name} | ${item.value}</Text>
                </Button>
            </View>
        )
    }

    onPressItem = ({item}) => {
        this.props.navigation.navigate('PortfolioDetailScreen', {name: item.name})
    }

    keyExtractor = (item, index) => item.name

    render() {
        const {portfolioStore} = this.props.rootStore
        let portfolios = portfolioStore.portfolios
        if (portfolioStore.loading) {
            return ( <ActivityIndicator /> )
        }
        return (
            <View>
                <Text>{portfolioStore.netWorth ? 'Net worth: $' + portfolioStore.netWorth : null}</Text>
                <FlatList
                    data={portfolios}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                />
                <Btn rounded onPress={() => this.props.navigation.navigate('NewPortfolioScreen')}>
                    <Icon name={'add'} />
                </Btn>
            </View>
        );
    }
}

export default PortfolioListComponent