import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

class PortfolioComponent extends Component {
  
  
  render() {
    return (
      <View>
          <Text>{this.props.name}</Text>       
      </View>
    );
  }
}

export default PortfolioComponent