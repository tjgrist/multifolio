import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Button from 'react-native-button'
import ApplicationStyles from '../../styles'


class NewPortfolioComponent extends Component {
  render() {
    return (
     <Button style={ApplicationStyles.button} onPress={ ()=> null }>
          Save
        </Button>
    );
  }
}

export default NewPortfolioComponent