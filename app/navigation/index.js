import { TabNavigator, StackNavigator } from 'react-navigation'

import WelcomeScreen from '../containers/welcome_screen'
import CheckinScreen from '../containers/checkin_screen'
import PortfoliosScreen from '../containers/portfolios-screen'
import NewPortfolioScreen from '../containers/new-portfolio-screen'
import PortfolioDetailScreen from '../containers/portfolio-detail-screen'
import CoinDetailScreen from '../containers/coin-detail-screen'

import React from 'react'
import { RootStore } from '../stores'

const WelcomeTab = StackNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  CheckinScreen: { screen: CheckinScreen },

});

const PortfoliosTab = StackNavigator({
  PortfoliosScreen: { screen: PortfoliosScreen, },
  NewPortfolioScreen: { screen: NewPortfolioScreen },
  PortfolioDetailScreen: { screen: PortfolioDetailScreen},
  CoinDetailScreen: { screen: CoinDetailScreen }
}, { mode: 'modal' })

const Navigation = TabNavigator({
  Portfolios: { screen: PortfoliosTab },
  Home: { screen: WelcomeTab },
});

<PortfoliosTab screenProps={new RootStore()} />

export default Navigation
