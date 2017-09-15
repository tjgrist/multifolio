import { TabNavigator, StackNavigator } from 'react-navigation'

import WelcomeScreen from '../containers/welcome_screen'
import SecondScreen from '../containers/second_screen'
import CounterScreen from '../containers/counter_screen'
import CheckinScreen from '../containers/checkin_screen'
import ThirdScreen from '../containers/third_screen'
import PorfoliosScreen from '../containers/portfolios-screen'

const WelcomeTab = StackNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  SecondScreen: { screen: SecondScreen },
  CounterScreen: { screen: CounterScreen },
});

const CheckinTab = StackNavigator({
  CheckinScreen: { screen: CheckinScreen },
  ThirdScreen: { screen: ThirdScreen },
})

const PorfoliosTab = StackNavigator({
  PorfoliosScreen: { screen: PorfoliosScreen }
})

const Navigation = TabNavigator({
  Home: { screen: WelcomeTab },
  Portfolios: { screen: PorfoliosTab },
  Checkin: { screen: CheckinTab },
});

export default Navigation
