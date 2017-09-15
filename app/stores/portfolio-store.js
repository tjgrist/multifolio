import Realm from 'realm'

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

class Coin {
    static get() { return realm.objects(Portfolio.schema.name) }
    static schema = {
        name: 'Coin',
        primaryKey: 'name',
        properties: {
            name: {type: 'string'},
            symbol: {type: 'string'},
            value: {type: 'double', optional: true},
            holdings: {type: 'double', optional: true},
            buyPrice: {type: 'double', optional: true},
            sellPrice: {type: 'double', optional: true},
            exchange: {type: 'string', optional: true}
        }
    }
}
// Create Realm DB
const realm = new Realm({schema: [Coin, Portfolio]});

export default Portfolio;



