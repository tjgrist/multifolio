import Realm from 'realm'
import {PortfolioStore, Portfolio} from './portfolio-store'
import {CoinStore, Coin} from './coin-store'
import uuid from 'uuid/v1'

// Create Realm DB
const realm = new Realm({schema: [Coin, Portfolio]});

class RootStore {
    constructor () {
        this.portfolioStore = new PortfolioStore(this)
        this.coinStore = new CoinStore(this)
    }
}

//can seed db here inside write transaction
realm.write(() => {

    if (!realm.objects('Portfolio').length) {
        let btc = { id: uuid(), name: 'Bitcoin', symbol: 'BTC', holdings: 7.9, exchange: 'Coinbase', pair: 'BTC-USD', buy: true},
            ltc = { id: uuid(), name: 'Litecoin', symbol: 'LTC', holdings: 5.8, exchange: 'Coinbase', pair: 'LTC-USD', buy: true},
            eth = { id: uuid(), name: 'Ether', symbol: 'ETH', holdings: 1.5, exchange: 'Coinbase', pair: 'ETH-USD', buy: true }
        
        let btc2 = { id: uuid(), name: 'Bitcoin', symbol: 'BTC', holdings: 0.509, exchange: 'Coinbase', pair: 'BTC-USD', buy: true},
            ltc2 = { id: uuid(), name: 'Litecoin', symbol: 'LTC', holdings: 12.86, exchange: 'Coinbase', pair: 'LTC-USD', buy: true},
            eth2 = { id: uuid(), name: 'Ether', symbol: 'ETH', holdings: 0.734, exchange: 'Coinbase', pair: 'ETH-USD', buy: true }

        let btc3 = { id: uuid(), name: 'Bitcoin', symbol: 'BTC', holdings: 1, exchange: 'Coinbase', pair: 'BTC-USD', buy: true},
            ltc3 = { id: uuid(), name: 'Litecoin', symbol: 'LTC', holdings: 1, exchange: 'Coinbase', pair: 'LTC-USD', buy: true},
            eth3 = { id: uuid(), name: 'Ether', symbol: 'ETH', holdings: 1, exchange: 'Coinbase', pair: 'ETH-USD', buy: true }

        let btc4 = { id: uuid(), name: 'Bitcoin', symbol: 'BTC', holdings: 1.4, exchange: 'Coinbase', pair: 'BTC-USD', buy: true},
            ltc4 = { id: uuid(), name: 'Litecoin', symbol: 'LTC', holdings: 3.6, exchange: 'Coinbase', pair: 'LTC-USD', buy: true},
            eth4 = { id: uuid(), name: 'Ether', symbol: 'ETH', holdings: 4.5, exchange: 'Coinbase', pair: 'ETH-USD', buy: true }
        
        let btc5 = { id: uuid(), name: 'Bitcoin', symbol: 'BTC', holdings: 0.8, exchange: 'Coinbase', pair: 'BTC-USD', buy: true},
            ltc5 = { id: uuid(), name: 'Litecoin', symbol: 'LTC', holdings: 3.7, exchange: 'Coinbase', pair: 'LTC-USD', buy: true},
            eth5 = { id: uuid(), name: 'Ether', symbol: 'ETH', holdings: 6.8, exchange: 'Coinbase', pair: 'ETH-USD', buy: true }

        let btc6 = { id: uuid(), name: 'Bitcoin', symbol: 'BTC', holdings: 2, exchange: 'Coinbase', pair: 'BTC-USD', buy: true},
            ltc6 = { id: uuid(), name: 'Litecoin', symbol: 'LTC', holdings: 2, exchange: 'Coinbase', pair: 'LTC-USD', buy: true},
            eth6 = { id: uuid(), name: 'Ether', symbol: 'ETH', holdings: 2, exchange: 'Coinbase', pair: 'ETH-USD', buy: true }

        let portfolio =  { name: 'My Main Portfolio', coins: [btc, ltc, eth]},
            portfolio2 = { name: 'Tradings',  coins: [eth2, btc2, ltc2]},
            portfolio3 = { name: 'Vault',     coins: [ltc3, eth3, btc3]},
            portfolio4 = { name: 'Example 4', coins: [btc4, ltc4, eth4]},
            portfolio5 = { name: 'Example 5', coins: [eth5, btc5, ltc5]},
            portfolio6 = { name: 'Example 6', coins: [ltc6, eth6, btc6]}

        realm.create('Portfolio', portfolio)
        realm.create('Portfolio', portfolio2)
        realm.create('Portfolio', portfolio3)
        realm.create('Portfolio', portfolio4)
        realm.create('Portfolio', portfolio5)
        realm.create('Portfolio', portfolio6)
    }

})

export {
    RootStore,
    realm
}