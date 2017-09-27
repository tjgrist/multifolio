import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Container, Content, Button, Icon } from 'native-base';
import ApplicationStyles from '../styles'
import PortfolioListComponent from '../components/portfolio/portfolio-list'
import { Provider } from 'mobx-react/native'

export default class PortfoliosScreen extends Component {
  static navigationOptions = {
    tabBarVisible: true,
    title: 'Portfolios',
    tabBarIcon: ({ tintColor }) => (
      <Icon name={'folder'} color={tintColor} size={24} />
    )
  };

  render() {
    return (
      <Provider rootStore={this.props.screenProps}>
          <PortfolioListComponent navigation={this.props.navigation} />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
