import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { observer } from 'mobx-react/native'
import Button from 'react-native-button'


@observer
class PortfolioDetailComponent extends Component {

    _renderItem = ({item}) => (
        <View>
            <Button onPress={() => this._onPressItem({item}) }>
            {item.symbol} | {item.holdings}
            </Button>
        </View>
    )

    _onPressItem = ({item}) => {
        const { navigate } = this.props.navigation;
        navigate('CoinDetailScreen', {coin: item})
    }

     _keyExtractor = (item, index) => item.name

    render() {
        const {portfolio} = this.props.navigation.state.params
        return (
            <View>
                <Text>{portfolio.name}</Text>
                <Text>${}</Text>
                <FlatList
                    data={portfolio.coins}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}

export default PortfolioDetailComponent