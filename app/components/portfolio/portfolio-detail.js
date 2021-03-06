import React, { Component } from 'react';
import { FlatList, Alert, View, ScrollView } from 'react-native';
import { observer } from 'mobx-react/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { DeleteButton } from '../shared'
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
    Footer
    } from '@shoutem/ui'

const AddCoinButton = (props) => (
    <TouchableOpacity onPress={() => props.navigation.navigate('AddCoinScreen', {name: props.name})}>
        <Icon name={'plus'} size={16} />
    </TouchableOpacity>
)

@observer    
export default class PortfolioDetailComponent extends Component {

    constructor (props) {
        super(props)
        const {name} = props.navigation.state.params
        this.state = {
            name: name,
            portfolio: props.stores.portfolioStore.getByName(name),
            alertMsg: 'Are you sure you want to delete this portfolio?'
        }
    }

    renderItem = ({item}) => (
        <TouchableOpacity onPress={() => this.onPressItem({item}) }>
            <Divider styleName='section-header'>    
                <Title>{item.symbol}</Title>
                <Subtitle>{item.holdings}</Subtitle>
                <Subtitle>{item.value}</Subtitle>
            </Divider>
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
                <ScrollView>
                    <FlatList
                        data={this.state.portfolio.coins}
                        keyExtractor={this.keyExtractor}
                        renderItem={this.renderItem}
                    />
                </ScrollView>
                <Divider styleName='section-header'>
                <DeleteButton alert={this.alert}/>
                <AddCoinButton 
                    navigation={this.props.navigation} 
                    name={this.state.name}/>
                </Divider>
            </View>
        );
    }
}