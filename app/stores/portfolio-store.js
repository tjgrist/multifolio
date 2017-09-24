import {realm} from './index'
import { observable, computed, action } from 'mobx'

class Portfolio {

    constructor () {}

    getValue() {
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
    @observable portfolios

    constructor (rootStore) {
        this.rootStore = rootStore
        this.portfolios = realm.objects('Portfolio')
    }

    @action update () {
        this.portfolios = realm.objects('Portfolio')
    }

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
    }

    @computed get netWorth () {
        let total = this.portfolios.reduce((sum, p) => sum + p.value, 0)
        return +((total)).toFixed(2)
    }

    @action create (portfolio) {
        if (realm.objects('Portfolio').filtered("name = '" + portfolio.name + "'").length) return;
        realm.write(() => {
            portfolio.coins = portfolio.coins || []
            realm.create('Portfolio', portfolio)
        })
    }

    @action remove (portfolio) {
        if (!realm.objects('Portfolio').filtered("name = '" + portfolio.name + "'").length) return;
        realm.write(() => {
            realm.delete(portfolio)
        })
    }

}

export { PortfolioStore, Portfolio }



