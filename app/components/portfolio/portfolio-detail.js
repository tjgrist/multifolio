import React, { Component } from 'react';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import { observer } from 'mobx-react/native'
import { Container, Content, Icon } from 'native-base';

import { Divider, Image, Title, Subtitle, Screen, Heading, Button, Caption, TouchableOpacity } from '@shoutem/ui'

@observer
class PortfolioDetailComponent extends Component {

    constructor (props) {
        super(props)
        const {name} = this.props.navigation.state.params
        console.log(this.props)
        this.state = {
            portfolio: this.props.stores.portfolioStore.getByName(name)
        }
    }

    renderItem = ({item}) => (
            <TouchableOpacity onPress={() => this.onPressItem({item}) }>
                <Title>{item.symbol}</Title>
                <Subtitle>{item.holdings}</Subtitle>
                <Subtitle>{item.value}</Subtitle>
            </TouchableOpacity>
    )

    onPressItem = ({item}) => {
        const { navigate } = this.props.navigation;
        navigate('CoinDetailScreen', {coin: item})
    }

    keyExtractor = (item, index) => item.name

    remove = (item) => {
        if (item) {
            const { portfolioStore } = this.props.stores
            portfolioStore.remove(item)
            this.props.navigation.goBack()
        }
    }

    render() {
        if (!this.state.portfolio) {
            return ( <Text>Portfolio not found!</Text> )
        }
        return (
            <View>
                <Title>${this.state.portfolio.value}</Title>
                    <Divider styleName='section-header'>
                    <Caption>COIN</Caption>
                    <Caption>HOLDINGS</Caption>
                    <Caption>VALUE</Caption>
                    </Divider>
                <FlatList
                    data={this.state.portfolio.coins}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                />
                <Divider stylename='line'/>
                <Button onPress={() => this.remove(this.state.portfolio) }>
                    <Icon name={'trash'} size={16} />
                </Button>
            </View>
        );
    }
}

export default PortfolioDetailComponent