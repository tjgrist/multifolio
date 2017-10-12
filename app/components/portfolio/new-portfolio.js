import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Button from 'react-native-button'
import ApplicationStyles from '../../styles'
import { observer, inject } from 'mobx-react/native'
import { TextInput } from '@shoutem/ui'
import { SaveButton } from '../shared'

@observer
class NewPortfolioComponent extends Component {
  
  state = {
    name: '',
    msg: '',
    placeholder: 'Name your portfolio...'
  }

  save = () => {  
    if (!this.state.name.length) {
      return this.setState({msg: 'Name cannot be empty'})
    }
    let portfolio = { name: this.state.name }
    let msg = this.props.store.portfolioStore.create(portfolio)
    this.setState({name: '', msg: msg})
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder={this.state.placeholder}
          onChangeText={(name) => this.setState({name})}
        />
        <Text>{this.state.msg}</Text>
        <SaveButton save={this.save}/>
      </View>
    );
  }
}

export default NewPortfolioComponent