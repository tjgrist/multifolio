import { realm } from './index'
import { create } from 'apisauce'
import config from '../config'
import { ApiWorker } from './api'

class Coin {
    static get() { return realm.objects(Portfolio.schema.name) }

    async getValue () {
        if (!this.exchange) return
        let matchUrl = config[this.exchange.toUpperCase()]
        if (matchUrl) {
            const api = create({
                baseURL: matchUrl,
                timeout: 10000
            });
            let route = '/' + this.pair + '/' + (this.buy ? 'buy' : 'sell') 
            try {
                let res = await api.get(route)
                if (res.ok) {
                    return res.data.data.amount * this.holdings
                }
                return 'Error while fetching data'
            }
            catch (e) {
                throw e
            }
        }
    }

    static schema = {
        name: 'Coin',
        primaryKey: 'id',
        properties: {
            id: {type: 'string'},
            name: {type: 'string'},
            symbol: {type: 'string'},
            value: {type: 'double', optional: true},
            holdings: {type: 'double', optional: true},
            buyPrice: {type: 'double', optional: true},
            sellPrice: {type: 'double', optional: true},
            pair: {type: 'string', optional: true},
            exchange: {type: 'string', optional: true},
            buy: {type: 'bool', optional: true},
            sell: {type: 'bool', optional: true}
        }
    }
}

class CoinStore {

    static get () { return realm.objects('Coin') }

    static getById (id) { return realm.objects('Coin').filtered("id = '" + id + "'") }

    static create (coin) {
        if (!this.exists(coin)) {
            realm.write(() => {
                realm.create('Coin', coin)
            })
            return coin
        }
    }

    static update (coin) {
        if (this.exists(coin)) {
            realm.write(() => {
                //passing true tells realm to update that which has primary key 
                realm.create('Coin', coin, true)
            })
            return coin
        }
        throw Error('no coin found with id: ${coin.id}')
    }

    static delete (coin) {
        if (this.exists(coin)) {
            realm.write(() => {
                realm.delete(coin)
            })
        }
        throw Error('no coin found with id: ${coin.id}')

    }

    //helper
    exists (coin) {
        return realm.objects('Coin').filtered("id = '" + coin.id + "'").length
    }
    
}

export {Coin, CoinStore};