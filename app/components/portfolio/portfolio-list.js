import React, { Component } from 'react';
import {  Text, View, FlatList, TouchableHighlight, ActivityIndicator } from 'react-native';
import Button from 'react-native-button'
import PortfolioDetailComponent from './portfolio-detail'
import { observer, inject, Provider } from 'mobx-react/native'
import NewPortfolioComponent from './new-portfolio'

import { Container, Content, Button as Btn, Icon } from 'native-base';
import { Divider, Image, Title, Subtitle, Screen, Heading } from '@shoutem/ui'

@inject('rootStore') @observer 
export default class PortfolioListComponent extends Component {

    constructor (props) {
        super(props)
        this.state = {
            portfolios: props.rootStore.portfolioStore.portfolios
        }
    }

    renderItem = ({item}) => {
        return (
            <View>
                <Button onPress={() => this.onPressItem({item}) }>
                    <Title>{item.name}</Title>
                    <Subtitle>${item.value}</Subtitle>
                </Button>
                <Divider styleName='line' />
            </View>
        )
    }

    onPressItem = ({item}) => {
        this.props.navigation.navigate('PortfolioDetailScreen', {name: item.name})
    }

    keyExtractor = (item, index) => item.name

    render() {
        const {portfolioStore} = this.props.rootStore
        if (portfolioStore.loading) {
            return ( <ActivityIndicator /> )
        }
        return (
            <Screen>
                <Heading>{portfolioStore.netWorth ? 'Net worth: $' + portfolioStore.netWorth : null}</Heading>
                <Divider styleName='section-header'/>
                <FlatList
                    data={portfolioStore.portfolios}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                />
                <Btn rounded onPress={() => this.props.navigation.navigate('NewPortfolioScreen')}>
                    <Icon name={'add'} />
                </Btn>
            </Screen>
        );
    }
}