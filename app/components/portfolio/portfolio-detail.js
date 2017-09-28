import React, { Component } from 'react';
import { FlatList, Alert, View } from 'react-native';
import { observer } from 'mobx-react/native'
import { Icon } from 'native-base';
import { 
    Divider, 
    Image, 
    Title, 
    Subtitle, 
    Screen, 
    Heading, 
    Button, 
    Caption, 
    TouchableOpacity,
    Row, 
    } from '@shoutem/ui'

@observer    
export default class PortfolioDetailComponent extends Component {

    constructor (props) {
        super(props)
        const {name} = this.props.navigation.state.params
        this.state = {
            portfolio: this.props.stores.portfolioStore.getByName(name),
            alertMsg: 'Are you sure you want to delete this portfolio?'
        }
    }

    renderItem = ({item}) => (
            <TouchableOpacity onPress={() => this.onPressItem({item}) }>
                <Row>    
                    <Title>{item.symbol}</Title>
                    <Subtitle>{item.holdings}</Subtitle>
                    <Subtitle>{item.value}</Subtitle>
                </Row>
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
            portfolioStore.delete(item)
            this.props.navigation.goBack()
        }
    }

    alert = () => {
        Alert.alert('Delete', 
        this.state.alertMsg,
    [
        {text: 'Cancel', onPress: () => null, style: 'cancel' },
        {text: 'Ok', onPress: () => this.remove(this.state.portfolio)},
    ])
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
                <Divider styleName='line'/>
                <Button onPress={() => this.alert()}>
                    <Icon name={'trash'} size={16} />
                </Button>
            </View>
        );
    }
}