import Realm from 'realm'
import {PortfolioStore, Portfolio} from './portfolio-store'
import {CoinStore, Coin} from './coin-store'

// Create Realm DB
const realm = new Realm({schema: [Coin, Portfolio]});

//can seed db here with realm.write(() => {}) and realm.create(()=>{})
realm.write(() => {

    if (!realm.objects('Portfolio').length) {
        let btc = { name: 'Bitcoin', symbol: 'BTC', holdings: 7.9 },
            ltc = { name: 'Litecoin', symbol: 'LTC', holdings: 5.8 },
            eth = { name: 'Ether', symbol: 'ETH', holdings: 1.5 }

        let btc2 = { name: 'Bitcoin', symbol: 'BTC', holdings: 1.9 },
            ltc2 = { name: 'Litecoin', symbol: 'LTC', holdings: 19.8 },
            eth2 = { name: 'Ether', symbol: 'ETH', holdings: 3.44 }

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