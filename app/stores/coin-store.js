class Coin {
    static get() { return realm.objects(Portfolio.schema.name) }
    static schema = {
        name: 'Coin',
        primaryKey: 'name',
        properties: {
            name: {type: 'string'},
            symbol: {type: 'string'},
            value: {type: 'double', optional: true},
            holdings: {type: 'double', optional: true},
            buyPrice: {type: 'double', optional: true},
            sellPrice: {type: 'double', optional: true},
            exchange: {type: 'string', optional: true}
        }
    }
}

export default Coin;