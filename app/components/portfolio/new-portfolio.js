import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import Button from 'react-native-button'
import ApplicationStyles from '../../styles'
import { observer, inject } from 'mobx-react/native'

@observer
class NewPortfolioComponent extends Component {
  
  state = {
    name: ''
  }

  save = () => {
    console.log(this.props)
    const portfolioStore = this.props.store.portfolioStore
    console.log(portfolioStore)
    let portfolio = { name: this.state.name }
    portfolioStore.create(portfolio)
    this.setState({name: ''})
    this.props.refresh()
  }


  render() {
    return (
      <View>
        <TextInput
        style={{height: 30, width: 260, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(name) => this.setState({name})}
        value={this.state.name}
        />
        <Button style={ApplicationStyles.button} onPress={ ()=> {this.save() } }>
          Add
        </Button>
      </View>
    );
  }
}

export default NewPortfolioComponent