import {realm} from './index'
import { observable, computed, action, autorun } from 'mobx'

class Portfolio {

    constructor () {}

    //synchronous
    setValue() {
        let total = this.coins.map((coin) => coin.value)
            .reduce((sum, val) => sum + val, 0)
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
    @computed get portfolios () { return realm.objects('Portfolio')}

    constructor (rootStore) {
        this.rootStore = rootStore
        autorun(() => this.setValues())
    }

    @action async setValues () {
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
            p.setValue()
        })
        this.loading = false
    }

    @computed get netWorth () {
        let total = this.portfolios.reduce((sum, p) => sum + p.value, 0)
        return +((total)).toFixed(2)
    }

    getByName (name) {
        return realm.objectForPrimaryKey('Portfolio', name)
    }

    create (portfolio) {
        if (this.exists(portfolio)) return;
        realm.write(() => {
            portfolio.coins = portfolio.coins || []
            realm.create('Portfolio', portfolio)
        })
        return 'Success!'
    }

    updateCoin (portfolio, coin) {
        if (!this.exists(portfolio)) return;
        let por = realm.objects('Portfolio').filtered("name = '" + portfolio.name + "'")[0]
        let sameCoinArray = por.coins.filter((c) => c.name === coin.name)
        if (sameCoinArray.length) {
            console.log('same Coin!')
            realm.write(() => {
                if (coin.buy) sameCoinArray[0].holdings += coin.holdings
                else sameCoinArray[0].holdings -= coin.holdings
            })
            }
        else {
            realm.write(() => {
                por.coins.push(coin)
            })
        }
        this.setValues()
    }

    delete (portfolio) {
        if (!this.exists(portfolio)) return;
        realm.write(() => {
            realm.delete(portfolio)
        })
    }

    exists (portfolio) {
        return realm.objects('Portfolio').filtered("name = '" + portfolio.name + "'").length
    }

}

export { PortfolioStore, Portfolio }



