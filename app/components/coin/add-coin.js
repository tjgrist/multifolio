import React from 'react'
import { FlatList, Alert, View, ScrollView, Text } from 'react-native';
import { observer } from 'mobx-react/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import constants from '../../config/constants'
import SearchInput, { createFilter } from 'react-native-search-filter'
import { SaveButton }  from '../shared'
import { RESET } from '../../navigation/actions'
import uuid from 'uuid/v1'
const KEYS = ['name', 'pair']
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
    TextInput,
    DropDownMenu
    } from '@shoutem/ui'

@observer
export default class AddCoinComponent extends React.Component {

    constructor(props) {
        super(props)
        const {name} = props.navigation.state.params
        this.state = {
            search: '',
            selectedPair: null,
            selectedExchange: null,
            portfolio: this.props.stores.portfolioStore.getByName(name),
            name: '',
            symbol: '',
            pair: null,
            holdings: 0,
            buy: true,
            sell: false
        }
    }

    onPressItem = ({item}) => {
       this.setState({selectedPair: item})
    }

    renderItem = ({item}) => (
        <View>
            <TouchableOpacity onPress={() => this.onPressItem({item}) }>
                <Subtitle>{item.name}: {item.pair}</Subtitle>
            </TouchableOpacity>
            <Divider styleName='line' />
        </View>
    )                       

    keyExtractor = (item, index) => item.pair

    save () {
        //TODO validate values
        let coin = {
            id: uuid(),
            name: this.state.selectedPair.name,
            symbol: this.state.selectedPair.symbol,
            pair: this.state.selectedPair.pair,
            holdings: this.state.holdings,
            buy: this.state.buy,
            sell: this.state.sell
        }
        console.log(coin)
        let result = this.props.stores.portfolioStore.updateCoin(this.state.portfolio, coin)
        this.props.navigation.dispatch(RESET)
    }

    render () {
        let filteredSearch = constants.pairs.filter(createFilter(this.state.search, KEYS))
        return (
            <View> 
                <TextInput
                    value={this.state.selectedPair ? this.state.selectedPair.pair : this.state.search}
                    placeholder={'Search for coin...'}
                    onChangeText={(text) => this.setState({search: text, selectedExchange: null })}
                    />
                    <Icon name={'search'} />
                     <ScrollView>
                        <FlatList
                            data={filteredSearch}
                            keyExtractor={this.keyExtractor}
                            renderItem={this.renderItem}
                            />
                    </ScrollView>
                     <TextInput
                        placeholder={'Enter holdings'}
                        keyboardType={'number-pad'}
                        onChangeText={(num) => this.setState({holdings: parseFloat(num) })}
                        editable={this.state.selectedPair? true : false}
                    />
                    <Divider styleName='section-header' />
                    <TouchableOpacity onPress={() => this.save()}>
                        <Icon name={'save'} size={24} />
                        <Text>Save</Text>
                    </TouchableOpacity>
            </View>
        )
    }
}