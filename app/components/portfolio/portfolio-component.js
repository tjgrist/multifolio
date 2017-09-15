import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

class PortfolioComponent extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight>
          <Text>{this.props.name}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default PortfolioComponent