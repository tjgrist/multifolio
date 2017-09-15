import Realm from 'realm'
import {PortfolioStore, Portfolio} from './portfolio-store'
import {CoinStore, Coin} from './coin-store'

// Create Realm DB
const realm = new Realm({schema: [Coin, Portfolio]});

//can seed db here with realm.write

export {
    realm,
    PortfolioStore,
    CoinStore
}