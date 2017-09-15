import {observable} from 'mobx'
import api from './api'

class CoinListStore {
  @observable coins = []; //array of coins and their exchanges 
  @observable coin = null;
  @observable newCoin = null;

  constructor() {
  }

  addCoin(coin) {
      if (coin) {
        this.coins.push(coin);
      }  
  }

  removeCoin(coin) {
    
  }

  update(coin) {
  
  }

  getFromRemote() {
      await api.get('/${}')
  }
}

const CoinListStore = new CoinListStore;

export default CoinListStore;
