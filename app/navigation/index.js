import { TabNavigator, StackNavigator } from 'react-navigation'

import WelcomeScreen from '../containers/welcome_screen'
import CounterScreen from '../containers/counter_screen'
import CheckinScreen from '../containers/checkin_screen'
import PortfoliosScreen from '../containers/portfolios-screen'
import NewPortfolioScreen from '../containers/new-portfolio-screen'
import PortfolioDetailScreen from '../containers/portfolio-detail-screen'

const WelcomeTab = StackNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  CounterScreen: { screen: CounterScreen },
});

const CheckinTab = StackNavigator({
  CheckinScreen: { screen: CheckinScreen },
})

const PortfoliosTab = StackNavigator({
  PortfoliosScreen: { screen: PortfoliosScreen },
  NewPortfolioScreen: { screen: NewPortfolioScreen },
  PortfolioDetailScreen: { screen: PortfolioDetailScreen}
})

const Navigation = TabNavigator({
  Portfolios: { screen: PortfoliosTab },
  Home: { screen: WelcomeTab },
  Checkin: { screen: CheckinTab },
});

export default Navigation
