import React from 'react'
import { FlatList, Alert, View, ScrollView } from 'react-native';
import { observer } from 'mobx-react/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import constants from '../../config/constants'
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
       
    }

    keyExtractor = (item, index) => item.name

    search = (text) => {
        this.showSearchBar()

    }

    filterCoins () {
        return constants.coins
    }

    showSearchBar = () => (
        <FlatList
            data={this.filterCoins}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
        />
    )


    render () {
        console.log(constants.coins)
        return (
            <View> 
                <TextInput
                    placeholder={'Search for coin...'}
                    onChangeText={(text) => this.search(text)}
                    />
                <DropDownMenu
                    styleName="horizontal"
                    options={constants.pairs}
                    selectedOption={this.state.selectedCoin ? this.state.selectedCoin : constants.pairs[0]}
                    onOptionSelected={(coin) => this.setState({ selectedCoin: coin })}
                    titleProperty="name"
                    valueProperty="pair"
                />
            </View>
        )
    }
}