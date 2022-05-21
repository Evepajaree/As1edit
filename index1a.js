"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url1 = 'https://ftx.com/api/markets/BTC/USDT';
var url2 = 'https://api1.binance.com/api/v3/avgPrice?symbol=BTCUSDT';
var a = 0;
var b = 0;
axios_1["default"].get(url1).then(function (response) {
    console.log("Binance BTC Price:" + response.data.result.price + "USDT");
    a = response.data.result.price;
    axios_1["default"].get(url2).then(function (response) {
        console.log("FTX BTC Price:" + response.data.price + "USDT");
        b = response.data.price;
        if (a > b) {
            var sum = a - b;
            var sum1 = sum * 100 / a;
            console.log("Diff:" + sum1 + "%");
        }
        else {
            var sum = b - a;
            var sum1 = sum * 100 / b;
            console.log("Diff:" + sum1 + "%");
        }
    });
});
