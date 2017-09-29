import React from 'react'
import { FlatList, Alert, View, ScrollView, Text } from 'react-native';
import { observer } from 'mobx-react/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import constants from '../../config/constants'
import SearchInput, { createFilter } from 'react-native-search-filter'
const KEYS = ['name', 'pair']
const EXC_KEYS = ['name']
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
            pair: '',
            selectedPair: null,
            selectedExchange: null,
            portfolio: this.props.stores.portfolioStore.getByName(name),
            coin: {
                name: '',
                symbol: '',
                pair: '',
                holdings: 0,
                exchange: '',
                buy: true,
                sell: !this.buy
            }
        }
    }

    renderItem = ({item}) => (
            <TouchableOpacity onPress={() => this.onPressItem({item}) }>
                <Divider styleName='section-header'>    
                    <Title>{item}</Title>
                </Divider>
                </TouchableOpacity>
    )

    onPressItem = ({item}) => {
       this.setState({selectedPair: item.pair})
       console.log(this.state)
    }

    keyExtractor = (item, index) => item.name

    renderItem = ({item}) => {
        return (
            <View>
                <Button onPress={() => this.onPressItem({item}) }>
                    <Subtitle>{item.name}</Subtitle>
                    <Text> {item.pair}</Text>
                </Button>
                <Divider styleName='line' />
            </View>
        )
    }

    keyExtractor = (item, index) => item.pair

    getExchanges = () => {

    }
    
    render () {
        const filteredSearch = constants.pairs.filter(createFilter(this.state.search, KEYS))
        let filteredExchanges = [].concat.apply([], filteredSearch.map((obj) => obj.exchanges))
        let newArr = []
        filteredExchanges.filter((val) => {
            let index = newArr.findIndex(x => x.name === val.name) 
            if (index <= -1) newArr.push({name: val.name}) 
        })
        filteredExchanges = newArr
        console.log(filteredExchanges, this.state.selectedExchange)
        return (
            <View> 
                <TextInput
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
                <DropDownMenu
                    styleName="horizontal"
                    options={filteredExchanges}
                    selectedOption={this.state.selectedExchange ? this.state.selectedExchange : filteredExchanges[0]}
                    onOptionSelected={(exc) => { console.log(exc); this.setState({ selectedExchange: exc })}}
                    titleProperty="name"
                    valueProperty="name"
                />
            </View>
        )
    }
}