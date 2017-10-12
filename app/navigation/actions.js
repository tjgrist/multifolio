import { NavigationActions } from 'react-navigation'

const RESET = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'PortfoliosScreen'})
  ]
})

export {
    RESET
}