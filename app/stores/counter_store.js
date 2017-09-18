import {observable} from 'mobx'
import api from './api'

class CounterStore {
  @observable counter = 0;
  @observable remoteCounter = 0;

  constructor() {
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  incrementAsync() {
    setTimeout(() => {
      this.counter++;
      }, 500);
  }

  async getFromRemote() {
    var r = await api.get('/btc-usd/buy')
    if(r.ok)
      this.remoteCounter = r.data.data;
    else
      this.remoteCounter = 'error';
  }
}

const counterStore = new CounterStore;

export default counterStore;
