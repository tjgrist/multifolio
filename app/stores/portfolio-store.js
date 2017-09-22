import {realm} from './index'
import { observable, computed, action } from 'mobx'

class Portfolio {

    constructor () {}

    getValue() {
        let values = this.coins.map((coin) => coin.value)
        return Promise.all(values).then((arr) => {
            let total = arr.reduce((sum, val) => sum + val, 0)
            total = +((total).toFixed(2))
            realm.write(() => {
                this.value = total
            })
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

    @observable isLoading = true

    constructor (rootStore) {
        this.rootStore = rootStore
    }

    @computed get portfolios() { return realm.objects('Portfolio') }

    @action computeValues () {
        this.isLoading = true;
        this.portfolios.forEach((p) => {
            p.coins.forEach((c) => {
                c.getValue().then((v) => {
                    p.getValue().then((val) => val )
                })
            })
        })
    }

    static create (portfolio) {
        if (realm.objects('Portfolio').filtered("name = '" + portfolio.name + "'").length) return;
        realm.write(() => {
            portfolio.coins = portfolio.coins || []
            realm.create('Portfolio', portfolio)
        })
    }

}

export { PortfolioStore, Portfolio }



