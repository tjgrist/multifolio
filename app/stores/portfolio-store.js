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

    update (portfolio, coin) {
        if (!this.exists(portfolio)) return;
        console.log('writing...')
        realm.write(() => {
            //realm.create('Coin', coin)  
            console.log(portfolio.coins)
            portfolio.coins.forEach((c) => console.log(c.name))
            //passing true tells realm to update that which has primary key 
            realm.create('Portfolio', portfolio, true)
        })
        return 'success'
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



