import Realm from 'realm'
import Coin from './coin-store'

class Portfolio {
  static get () { return realm.objects('Portfolio') }
  static schema = {
    name: 'Portfolio',
    primaryKey: 'name',
    properties: {
        id: {type: 'string'},
        name: {type: 'string'},
        value: {type: 'double', optional: true},
        profit: {type: 'double', optional: true},
        coins: {type: 'list', objectType: 'Coin'},
    }
  }
}
// Create Realm DB
const realm = new Realm({schema: [Coin, Portfolio]});

export default Portfolio



