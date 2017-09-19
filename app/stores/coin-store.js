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

    static create (coin) {
        if (realm.objects('Coin').filtered("id = '" + coin.id + "'").length) return;
        realm.write(() => {
            realm.create('Coin', coin)
        })
    }

    getValue () {
        //compute coin values
    }
    
}

export {Coin, CoinStore};