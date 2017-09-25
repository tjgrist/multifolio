import { create } from 'apisauce'
import config from '../config'

class ApiWorker {

  constructor () {

  }

  async computeValue (coin) {
    if (!coin || !coin.exchange) return
    let matchUrl = config[coin.exchange.toUpperCase()]
    if (matchUrl) {
      const api = create({
        baseURL: config.COINBASE,
        timeout: 10000
      });
      let route = '/' + coin.pair + '/' + coin.buy ? 'buy' : 'sell'
      let res = await api.get(route)
      if (res.ok) {
        let result = res.data.data.amount * coin.holdings
        return result
      }
      else { 
        console.error('api call failed')
      }
    }

  }

}



export { ApiWorker }
