import React, { Component } from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import { RootStore, realm } from '../stores'
import PortfolioListComponent from '../components/portfolio/portfolio-list-component'
import { Provider, observer } from 'mobx-react/native'

import { Container, Content, Button, Icon } from 'native-base';
import ApplicationStyles from '../styles'

@observer
export default class PortfoliosScreen extends Component {
  static navigationOptions = {
    tabBarVisible: true,
    title: 'Portfolios',
    tabBarIcon: ({ tintColor }) => (
      <Icon name={'folder'} color={tintColor} size={24} />
    )
  };

  constructor(props) {
    super(props)
    this.state = {
      root: new RootStore()
    }
  }

  componentWillMount() {
    this.state.root.portfolioStore.computeValues()
  }

  render() {
    if (this.state.root.portfolioStore.loading) {
      return ( <ActivityIndicator /> )
    }
    return (
      <Provider rootStore={this.state.root}>
        <View style={[styles.container, ApplicationStyles.container]}>
          <PortfolioListComponent navigation={this.props.navigation} />
        </View>
      </Provider>
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
