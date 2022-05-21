"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var usdtAmount = 290000;
var token = 0;
var url = 'https://api1.binance.com/api/v3/depth?symbol=BTCUSDT';
axios_1["default"].get(url).then(function (response) {
    var orderBook = response.data;
    var asks = response.data.asks;
    for (var _i = 0, asks_1 = asks; _i < asks_1.length; _i++) {
        var item = asks_1[_i];
        calculateOutputAmount(item);
    }
    console.log("Output BTC: ".concat(usdtAmount, "  ").concat(token, " "));
});
function calculateOutputAmount(orber) {
    var price = parseFloat(orber[0]);
    var volume = parseFloat(orber[1]);
    console.log("price= " + price + "\tvolume= " + volume);
    if (usdtAmount > price) {
        token = volume + token;
        usdtAmount = usdtAmount - price;
    }
}
