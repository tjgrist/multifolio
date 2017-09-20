import {realm} from './index'

class Coin {
    static get() { return realm.objects(Portfolio.schema.name) }
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
            exchange: {type: 'string', optional: true}
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
                realm.create('Coin', coin)
            })
            return coin
        }
        throw Error('no coin found with id: ${coin.id}')
    }

    static delete (coin) {
        if (this.exists(coin)) {
            realm.write(() => {
                realm.delete('Coin', coin)
            })
        }
        throw Error('no coin found with id: ${coin.id}')

    }

    async getValue (coin) {
        //compute coin value
    }

    //helper
    exists (coin) {
        return realm.objects('Coin').filtered("id = '" + coin.id + "'").length
    }
    
}

export {Coin, CoinStore};