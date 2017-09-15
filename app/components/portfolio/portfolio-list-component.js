import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { PortfolioStore } from '../../stores'
import PortfolioComponent from './portfolio-component'

class PortfolioListComponent extends Component {

    constructor (props) {
        super(props)
        this.dataSrc = PortfolioStore.get()
    }

    _renderItem = ({item}) => (
        <PortfolioComponent 
            name={item.name}
            onPressItem={this._onPressItem}
        
        />
    );

    _onPressItem = ({item}) => {
        
    }

  render() {
    return (
        <FlatList
            data={this.dataSrc}
            keyExtractor={(item, index) => item.name}
            renderItem={this._renderItem}
        />
    );
  }
}

export default PortfolioListComponent