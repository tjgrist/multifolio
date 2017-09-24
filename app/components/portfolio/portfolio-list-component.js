import React, { Component } from 'react';
import {  Text, View, FlatList, TouchableHighlight } from 'react-native';
import Button from 'react-native-button'
import PortfolioDetailComponent from './portfolio-detail-component'
import { observer, inject, Provider } from 'mobx-react/native'
import NewPortfolioComponent from './new-portfolio-component'

import { Container, Content, Button as Btn, Icon } from 'native-base';

@inject('rootStore') @observer 
class PortfolioListComponent extends Component {
    
    constructor (props) {
        super(props)
        this.state = {
            portfolios: this.props.rootStore.portfolioStore.portfolios,
            netWorth: this.props.rootStore.portfolioStore.netWorth
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
        return (
            <View>
                <FlatList
                    data={this.state.portfolios}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
                <Text>Net worth: ${this.state.netWorth}</Text>
                <Provider store={this.props.rootStore}>
                    <NewPortfolioComponent refresh={this.refresh} store={this.props.rootStore} navigation={this.props.navigation}/>
                </Provider>
            </View>
        );
    }
}

export default PortfolioListComponent