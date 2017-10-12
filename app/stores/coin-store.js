import { realm } from './index'
import { create } from 'apisauce'
import config from '../config'
import { ApiWorker } from './api'
import { observable, computed, action } from 'mobx'
const cc = require('cryptocompare')

class Coin {

    @action async getValue () {
        try {
            let res = await cc.price(this.symbol, 'USD')
            let value = Object.values(res)[0]
            let total = +((value * this.holdings).toFixed(2))
            realm.write(() => {
                this.value = total
            })
            return total
        }
        catch (e) {
            throw e
        }
    }

    static schema = {
        name: 'Coin',
        primaryKey: 'id',
        properties: {
            id: {type: 'string'},
            name: {type: 'string'},
            symbol: {type: 'string'},
            holdings: {type: 'double', optional: true},
            value: {type: 'double', optional: true},
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

    constructor (rootStore) {
        this.rootStore = rootStore
    }

    static get coins() { return realm.objects('Coin') }

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

export { CoinStore, Coin };