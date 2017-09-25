import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { RootStore, realm } from '../stores'
import PortfolioListComponent from '../components/portfolio/portfolio-list'
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

  render() {
    console.log(this.props.screenProps)
    return (
      <Provider rootStore={this.props.screenProps}>
        <View style={[styles.container, ApplicationStyles.container]}>
          <PortfolioListComponent navigation={this.props.navigation} />
          <Button rounded onPress={() => this.props.navigation.navigate('NewPortfolioScreen')}>
              <Icon name={'add'} />
          </Button>
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
