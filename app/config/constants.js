class Constants {

    constructor () {}

    exchanges = [
        {
            name: 'Coinbase',
        }
    ]

    pairs = [
        {
            name: 'Litecoin',
            pair: 'LTC-USD',
            exchanges: [
                {name:'Coinbase'},
                {name: 'Bitfinex'}
            ]
        },
        {
            name: 'Bitcoin',
            pair: 'BTC-USD',
            exchanges: [
                {name:'Coinbase'},
                {name:'Kraken'},
                {name: 'Cex.io'}
            ]
        },
        {
            name: 'Ether',
            pair: 'ETH-USD',
            exchanges: [
                {name:'Coinbase'},
                {name: 'Bittrex'}
            ]
        }
    ]

    coins = [
        'Litecoin',
        'Bitcoin',
        'Ether'
    ]

}

const constants = new Constants()

export default constants