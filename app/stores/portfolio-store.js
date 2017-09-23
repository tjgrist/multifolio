import {realm} from './index'
import { observable, computed, action } from 'mobx'

class Portfolio {

    constructor () {}

    getValue() {
        console.log('portfolio getValue called')
        let values = this.coins.map((coin) => coin.value)
        let total = values.reduce((sum, val) => sum + val, 0)
        total = +((total).toFixed(2))
        realm.write(() => {
            this.value = total
        })
        return total
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

    @observable loading = false

    constructor (rootStore) {
        this.rootStore = rootStore
    }

    @computed get portfolios() { return realm.objects('Portfolio') }

    @action async computeValues () {
        this.loading = true
        let promises = []
        this.portfolios.forEach((p) => {
            p.coins.forEach((c) => {
                promises.push(c.getValue())
            })
        })
        Promise.all(promises).then(() => this.computePortfolios())
    }

    @action computePortfolios () {
        this.portfolios.forEach((p) => {
            p.getValue()
        })
        this.loading = false
        console.log(this.loading)
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



