class constants {

    constructor () {

    }
    // exchanges = [
    //     {
    //         name: 'Coinbase',
    //         pairs: [
    //             this.pairs.BTCUSD,
    //             this.pairs.ETHUSD,
    //             this.pairs.LTCUSD
    //         ]
    //     }
    // ]

    pairs = [
        {
            name: 'Litecoin',
            pair: 'LTC-USD'
        },
        {
            name: 'Bitcoin',
            pair: 'BTC-USD'
        },
        {
            name: 'Ether',
            pair: 'ETH-USD'
        }
    ]

    coins = [
        'Litecoin',
        'Bitcoin',
        'Ether'
    ]

}
const Constants = new constants()
export default Constants