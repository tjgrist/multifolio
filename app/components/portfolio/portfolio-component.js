import React, { Component } from 'react';
import { Text, View } from 'react-native';

class PortfolioComponent extends Component {
  render() {
    return (
      <Text>{this.props.name}</Text>
    );
  }
}

export default PortfolioComponent