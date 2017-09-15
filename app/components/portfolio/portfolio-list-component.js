import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { PortfolioStore } from '../../stores'
import PortfolioComponent from './portfolio-component'
import { observer, inject } from 'mobx-react/native'


@inject('store') @observer
class PortfolioListComponent extends Component {

    constructor (props) {
        super(props)
        const {store} = this.props
        this.dataSrc = store.get()
    }

    _renderItem = ({item}) => (
        <PortfolioComponent 
            name={item.name}
            onPressItem={this._onPressItem}
        
        />
    );

    _onPressItem = ({item}) => {
        
    }

    _keyExtractor = (item, index) => item.name

  render() {
    return (
        <FlatList
            data={this.dataSrc}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
        />
    );
  }
}

export default PortfolioListComponent