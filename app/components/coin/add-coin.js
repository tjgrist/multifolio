import React from 'react'
import { FlatList, Alert, View, ScrollView, Text } from 'react-native';
import { observer } from 'mobx-react/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import constants from '../../config/constants'
import SearchInput, { createFilter } from 'react-native-search-filter'
import { SaveButton }  from '../shared'
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
        console.log(this.state)
        let coin = {
            id: uuid(),
            name: this.state.selectedPair.name,
            symbol: this.state.selectedPair.symbol,
            pair: this.state.selectedPair.pair,
            exchange: this.state.selectedExchange.name,
            holdings: this.state.holdings,
            buy: this.state.buy,
            sell: this.state.sell
        }
        console.log(coin)
        let result = this.props.stores.portfolioStore.update(this.state.portfolio, coin)
        console.log(result)
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
                    {this.state.selectedPair ? 
                        <DropDownMenu
                        styleName="horizontal"
                        options={this.state.selectedPair.exchanges}
                        selectedOption={this.state.selectedExchange ? this.state.selectedExchange : this.state.selectedPair.exchanges[0]}
                        onOptionSelected={(exc) => this.setState({ selectedExchange: exc })}
                        titleProperty="name"
                        valueProperty="name"
                        /> : null }
                    <TextInput
                        placeholder={'Enter holdings...'}
                        onChangeText={(num) => this.setState({holdings: num})}
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