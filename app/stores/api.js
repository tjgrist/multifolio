import { create } from 'apisauce'
import config from '../config'

const api = create({
  baseURL: config.coinbaseURL,
  timeout: 10000
});

export default api
