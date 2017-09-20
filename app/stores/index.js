import Realm from 'realm'
import {PortfolioStore, Portfolio} from './portfolio-store'
import {CoinStore, Coin} from './coin-store'
import uuid from 'uuid'

// Create Realm DB
const realm = new Realm({schema: [Coin, Portfolio]});

//can seed db here inside write transaction
realm.write(() => {

    if (!realm.objects('Portfolio').length) {
        let btc = { id: uuid(), name: 'Bitcoin', symbol: 'BTC', holdings: 7.9, exchange: 'Coinbase', pair: 'BTC-USD', buy: true},
            ltc = { id: uuid(), name: 'Litecoin', symbol: 'LTC', holdings: 5.8, exchange: 'Coinbase', pair: 'LTC-USD', buy: true },
            eth = { id: uuid(), name: 'Ether', symbol: 'ETH', holdings: 1.5, exchange: 'Coinbase', pair: 'ETH-USD', buy: true }

        let btc2 = { id: uuid(), name: 'Bitcoin', symbol: 'BTC', holdings: 1.9, exchange: 'Coinbase', pair: 'BTC-USD', buy: true },
            ltc2 = { id: uuid(), name: 'Litecoin', symbol: 'LTC', holdings: 19.8, exchange: 'Coinbase', pair: 'LTC-USD', buy: true },
            eth2 = { id: uuid(), name: 'Ether', symbol: 'ETH', holdings: 3.44, exchange: 'Coinbase', pair: 'ETH-USD', buy: true }

        let portfolio = { name: 'My Main Portfolio', coins: [btc, ltc, eth]},
            portfolio2 = { name: 'Tradings', coins: [eth2, btc2, ltc2]}

        realm.create('Portfolio', portfolio)
        realm.create('Portfolio', portfolio2)
    }

})

export {
    realm,
    PortfolioStore,
    CoinStore
}