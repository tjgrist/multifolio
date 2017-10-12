class Constants {

    pairs = [
        {
            name: 'Bitcoin',
            symbol: 'BTC',
            pair: 'BTC-USD',
            exchanges: [
                {name:'Coinbase'},
                {name:'Bitfinex'},
                {name:'Bitstamp'},
                {name:'Kraken'},
                {name:'Poloniex'},
                {name:'OkCoin'},
                {name:'Cex.io'},
                {name:'Bittrex'},
                {name:'Gemini'},
            ]
        },
        {
            name: 'Litecoin',
            symbol: 'LTC',
            pair: 'LTC-USD',
            exchanges: [
                {name:'Coinbase'},
                {name:'Bitfinex'},
                {name:'Bitstamp'},
                {name:'Kraken'},
                {name:'Poloniex'},
                {name:'OkCoin'},
            ]
        },
        {
            name: 'Ether',
            symbol: 'ETH',
            pair: 'ETH-USD',
            exchanges: [
                {name:'Coinbase'},
                {name:'Bitfinex'},
                {name:'Bitstamp'},
                {name:'Kraken'},
                {name:'Poloniex'},
                {name:'OkCoin'},
                {name:'Cex.io'},
                {name:'Bittrex'},
                {name:'Gemini'},
            ]
        },
        {
            name: 'Ripple',
            symbol: 'XRP',
            pair: 'XRP-USD',
            exchanges: [
                {name:'Bitfinex'},
                {name:'Bitstamp'},
                {name:'Kraken'},
                {name:'Poloniex'},
            ]
        },
        {
            name: 'Bitcoin Cash',
            pair: 'BCH-USD',
            symbol: 'BCH',
            exchanges: [
                {name:'Bitfinex'},
                {name:'Cex.io'},
            ]
        },
        {
            name: 'Neo',
            symbol: 'NEO',
            pair: 'NEO-USD',
            exchanges: [
                {name:'Bitfinex'},
            ]
        },
        {
            name: 'Zcash',
            symbol: 'ZEC',
            pair: 'ZEC-USD',
            exchanges: [
                {name:'Bitfinex'},
                {name:'Kraken'},
                {name:'Poloniex'}
            ]
        },
        {
            name: 'Dash',
            symbol: 'DASH',
            pair: 'DASH-USD',
            exchanges: [
                {name:'Kraken'},
                {name:'Cex.io'},
                {name:'Poloniex'},
            ]
        },
        // {
        //     name: 'Iota',
        //     symbol: 'MIOTA',
        //     pair: 'IOTA-USD',
        //     exchanges: [
        //         {name:'Bitfinex'},
        //     ]
        // },
        {
            name: 'Ether Classic',
            symbol: 'ETC',
            pair: 'ETC-USD',
            exchanges: [
                {name:'Bitfinex'},
                {name:'Kraken'},
                {name:'Poloniex'},
            ]
        },
        {
            name: 'OmiseGo',
            symbol: 'OMG',
            pair: 'OMG-USD',
            exchanges: [
                {name:'Bitfinex'},
            ]
        }
    ]

}

const constants = new Constants()

export default constants