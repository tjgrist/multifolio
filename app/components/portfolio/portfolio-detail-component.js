import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { observer } from 'mobx-react/native'

@observer
class PortfolioDetailComponent extends Component {

    render() {
        const {portfolio} = this.props.navigation.state.params
        return (
            <View>
                <Text>{portfolio.name}...</Text>
                <Text>{portfolio.value}</Text>
                <Text>{portfolio.id}</Text>
            </View>
        );
    }
}

export default PortfolioDetailComponent