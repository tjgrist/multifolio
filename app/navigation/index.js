import { TabNavigator, StackNavigator } from 'react-navigation'

import PortfoliosScreen from '../containers/portfolios-screen'
import NewPortfolioScreen from '../containers/new-portfolio-screen'
import PortfolioDetailScreen from '../containers/portfolio-detail-screen'
import CoinDetailScreen from '../containers/coin-detail-screen'
import AddCoinScreen from '../containers/add-coin-screen'

const PortfoliosTab = StackNavigator({
  PortfoliosScreen: { screen: PortfoliosScreen, },
  NewPortfolioScreen: { screen: NewPortfolioScreen },
  PortfolioDetailScreen: { screen: PortfolioDetailScreen},
  CoinDetailScreen: { screen: CoinDetailScreen },
  AddCoinScreen: { screen: AddCoinScreen }
}, { mode: 'modal' })

const Navigation = TabNavigator({
  Portfolios: { screen: PortfoliosTab },
});

export default Navigation
