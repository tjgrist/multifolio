import React, { Component } from 'react';
import {  Text, View, FlatList, TouchableHighlight, ActivityIndicator } from 'react-native';
import Button from 'react-native-button'
import PortfolioDetailComponent from './portfolio-detail'
import { observer, inject, Provider } from 'mobx-react/native'
import NewPortfolioComponent from './new-portfolio'

import { Container, Content, Button as Btn, Icon } from 'native-base';

@inject('rootStore') @observer 
class PortfolioListComponent extends Component {
    
    constructor (props) {
        super(props)
        this.state = {
            portfolios: this.props.rootStore.portfolioStore.portfolios,
        }
    }

    _renderItem = ({item}) => {
        return (
            <View>
                <Button onPress={() => this._onPressItem({item}) }>
                    <Text>{item.name}</Text>
                </Button>
                <Text>${item.value}</Text>
                <Button onPress={() => this.remove({item}) }>
                    <Icon name={'trash'} size={16} />
                </Button>
            </View>
        )
    }

    _onPressItem = ({item}) => {
        const { navigate } = this.props.navigation;
        navigate('PortfolioDetailScreen', {portfolio: item})
    }

    _keyExtractor = (item, index) => item.name

    remove = ({item}) => {
        this.props.rootStore.portfolioStore.remove(item)
        this.refresh()
    }

    refresh = () => {
        this.props.rootStore.portfolioStore.update()
        this.setState({portfolios: this.props.rootStore.portfolioStore.portfolios })
    }

    render() {
        const store = this.props.rootStore.portfolioStore
        if (store.loading) {
            return ( <ActivityIndicator /> )
        }
        return (
            <View>
                <Text>{store.netWorth ? 'Net worth: $' + store.netWorth : null}</Text>
                <Text></Text>
                <FlatList
                    data={store.portfolios}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
                <Provider store={this.props.rootStore}>
                    <Button rounded onPress={() => this.props.navigation.navigate('NewPortfolioScreen')}>
                        <Icon name={'add'} />
                    </Button>
                </Provider>
            </View>
        );
    }
}

export default PortfolioListComponent