import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import Button from 'react-native-button'
import Icon from 'react-native-vector-icons/FontAwesome'
import NewPortfolioComponent from '../components/portfolio/new-portfolio'
import { observer, inject } from 'mobx-react/native'

import ApplicationStyles from '../styles'

@observer
export default class NewPortfolioScreen extends Component {
    static navigationOptions = {
        tabBarVisible: false,
        title: 'New Portfolio',
    };

    constructor (props) {
        super(props)
        
    }

    componentDidMount() { 

    }

render() {
  console.log(this.props.screenProps)
    return (
      <NewPortfolioComponent store={this.props.screenProps}/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    textAlign: 'center',
    margin: 10
  },
});
