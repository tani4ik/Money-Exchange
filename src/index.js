// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let coins = [{symbol: 'H', value: 50}, {symbol: 'Q', value: 25}, {symbol: 'D', value: 10}, {symbol: 'N', value: 5}, {symbol: 'P', value: 1}];
    let result = {};
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    for (let i = 0; i < coins.length; i++) {
        let division = Math.floor(currency / coins[i].value);
        if (division >= 1) {
        	let coinSymbol = coins[i].symbol;
            currency = currency - division * coins[i].value;
            result[coinSymbol] = division
        }
    }
    return result;
}