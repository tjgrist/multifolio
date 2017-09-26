import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import Button from 'react-native-button'
import ApplicationStyles from '../../styles'
import { observer, inject } from 'mobx-react/native'

@observer
class NewPortfolioComponent extends Component {
  
  state = {
    name: '',
    msg: ''
  }

  save = () => {  
    let portfolio = { name: this.state.name }
    let msg = this.props.store.portfolioStore.create(portfolio)
    this.setState({name: '', msg: msg})
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View>
        <TextInput
          style={{height: 30, width: 260, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        />
        <Text>{this.state.msg}</Text>
        <Button style={ApplicationStyles.button} onPress={ ()=> { this.save() } }>
          Save
        </Button>
      </View>
    );
  }
}

export default NewPortfolioComponent