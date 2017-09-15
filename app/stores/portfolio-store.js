import Realm from 'realm'
import Coin from './coin-store'

class Portfolio {

    static get () { return realm.objects('Portfolio') }

    static getValue () {
        //sum coin array 
    }

    static create (Portfolio) {
        
    }

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

class PortfolioStore {

    static get () { return realm.objects('Portfolio') }

    static create (portfolio) {
        if (realm.objects('Portfolio').filtered("name = '" + portfolio.name + "'").length) return;
        realm.write(() => {
            portfolio.coins = portfolio.coins || []
            realm.create('Portfolio', portfolio)
        })
    }
    
}
// Create Realm DB
const realm = new Realm({schema: [Coin, Portfolio]});

export default PortfolioStore



