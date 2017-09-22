import {realm} from './index'
import { observable, computed } from 'mobx'

class Portfolio {

    constructor () {}

    getValue() {
        let values = this.coins.map((coin) => {
            return coin.getValue().then((val) => val)})
        return Promise.all(values).then((arr) => {
            let total = arr.reduce((sum, val) => sum + val, 0)
            total = +((total).toFixed(2))
            console.log(total)
            realm.write(() => {
                this.value = total
            })
            console.log(this.value, 'this value')
            return total
        })
    }

    static schema = {
        name: 'Portfolio',
        primaryKey: 'name',
        properties: {
            name: {type: 'string'},
            value: {type: 'double', optional: true},
            profit: {type: 'double', optional: true},
            coins: {type: 'list', objectType: 'Coin'},
        }
    }
}

class PortfolioStore {

    constructor (rootStore) {
        this.rootStore = rootStore
    }

    @computed get portfolios() { return realm.objects('Portfolio') }

    static create (portfolio) {
        if (realm.objects('Portfolio').filtered("name = '" + portfolio.name + "'").length) return;
        realm.write(() => {
            portfolio.coins = portfolio.coins || []
            realm.create('Portfolio', portfolio)
        })
    }

}

export { PortfolioStore, Portfolio }



