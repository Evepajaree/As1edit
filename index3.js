"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var inputUSDT = 290000;
var token = 0;
var url = 'https://api1.binance.com/api/v3/depth?symbol=BTCUSDT';
axios_1["default"].get(url).then(function (response) {
    var orderBook = response.data;
    var asks = response.data.asks;
    for (var _i = 0, asks_1 = asks; _i < asks_1.length; _i++) {
        var item = asks_1[_i];
        calculateOutput(item);
    }
    console.log("Output BTC: ".concat(inputUSDT, "  ").concat(token, " "));
});
function calculateOutput(orber) {
    var a = parseFloat(orber[0]);
    var b = parseFloat(orber[1]);
    console.log("price= " + a + "\tvolume= " + b);
    if (inputUSDT > a) {
        token = b + token;
        inputUSDT = inputUSDT - a;
    }
}
