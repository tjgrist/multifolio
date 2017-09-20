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
      //api.setBaseURL(matchUrl)
      let route = '/' + coin.pair + '/' + coin.buy ? 'buy' : 'sell'
      let res = await api.get(route)
      console.log(res)
      if (res.ok) {
        console.log(res.data.data.amount * coin.holdings)
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
