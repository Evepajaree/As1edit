"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var dayjs = require("dayjs");
var a = {};
var b = {};
var url = 'https://api1.binance.com/api/v3/klines?interval=1h&symbol=BTCUSDT';
axios_1["default"].get(url).then(function (response) {
    var _a;
    var candle = response.data; // ดึงข้อมูล Candlestick ของ ราคาเหรียญ BTC/USDT
    for (var _i = 0, candle_1 = candle; _i < candle_1.length; _i++) { //แยกข้อมูลในส่วนที่ไม่ต้องคำนวณใส่ใน object
        var key = candle_1[_i];
        a = {
            'open': key[1],
            'hight': key[2],
            'low': key[3],
            'close': key[4]
        };
        var formatdate = dayjs(key[0]).format("YYYY-MM-DD h:mm:ss");
        Object.assign(b, (_a = {}, _a[formatdate] = a, _a));
    }
    console.log(b);
    // const object = {};
    // // clt.map((item : any)=>{
    //   const newobject ={
    //     open :item[1],
    //     hight : item[2],
    //     low : item[3],
    //     close : item[4]
    //   };
    //   const formatdate = dayjs(item[0]).format("YYYY-MM-DD h:mm:ss");
    //   Object.assign(object,{[formatdate]:newobject});
    // });
    // console.log(object);
});
