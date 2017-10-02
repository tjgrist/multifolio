import React from 'react'
import { FlatList, Alert, View, ScrollView, Text } from 'react-native';
import { observer } from 'mobx-react/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import constants from '../../config/constants'
import SearchInput, { createFilter } from 'react-native-search-filter'
import { SaveButton }  from '../shared'
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
            coin: {
                name: '',
                symbol: '',
                pair: null,
                holdings: 0,
                exchange: null,
                buy: true,
                sell: !this.buy
            }
        }
    }

    onPressItem = ({item}) => {
       this.setState({selectedPair: item, coin: {pair: this.state.selectedPair.pair}})
    }

    renderItem = ({item}) => (
        <View>
            <TouchableOpacity onPress={() => this.onPressItem({item}) }>
                <Subtitle>{item.name}</Subtitle>
                <Text> {item.pair}</Text>
            </TouchableOpacity>
            <Divider styleName='line' />
        </View>
    )                       

    keyExtractor = (item, index) => item.pair

    save () {
        //TODO validate values
        this.state.portfolio.coins.push(this.state.coin)
        let result = this.props.stores.portfolioStore.update(this.state.portfolio)
        console.log(result)
    }

    render () {
        let filteredSearch = constants.pairs.filter(createFilter(this.state.search, KEYS))
        return (
            <View> 
                <TextInput
                    value={this.state.selectedPair ? this.state.selectedPair.pair : ''}
                    placeholder={'Search for coin...'}
                    onChangeText={(text) => this.setState({search: text, selectedExchange: null})}
                    />
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
                        onChangeText={(num) => this.setState({coin: {holdings: num}})}
                        />
                    <Divider styleName='section-header' />
                    <SaveButton save={this.save}/>
            </View>
        )
    }
}