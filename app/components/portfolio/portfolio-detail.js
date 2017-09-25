import React, { Component } from 'react';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import { observer } from 'mobx-react/native'
import Button from 'react-native-button'
import { Container, Content, Button as Btn, Icon } from 'native-base';

@observer
class PortfolioDetailComponent extends Component {

    constructor (props) {
        super(props)
        const {name} = this.props.navigation.state.params
        this.state = {
            portfolio: this.props.stores.portfolioStore.getByName(name)
        }
    }

    renderItem = ({item}) => (
        <View>
            <Button onPress={() => this.onPressItem({item}) }>
            {item.symbol} | {item.holdings}
            </Button>
        </View>
    )

    onPressItem = ({item}) => {
        const { navigate } = this.props.navigation;
        navigate('CoinDetailScreen', {coin: item})
    }

    remove = (item) => {
        if (item) {
            const { portfolioStore } = this.props.stores
            portfolioStore.remove(item)
            const { navigate } = this.props.navigation;
            navigate('PortfoliosScreen')
        }
    }

    keyExtractor = (item, index) => item.name

    render() {
        if (!this.state.portfolio) {
            return ( <Text>Portfolio not found!</Text> )
        }
        return (
            <View>
                <Text>{this.state.portfolio.name}</Text>
                <Text>${this.state.portfolio.value}</Text>
                <FlatList
                    data={this.state.portfolio.coins}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                />
                <Button onPress={() => this.remove(this.state.portfolio) }>
                    <Icon name={'trash'} size={16} />
                </Button>
            </View>
        );
    }
}

export default PortfolioDetailComponent