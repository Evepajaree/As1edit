"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://api1.binance.com/api/v3/depth?symbol=BTCUSDT';
axios_1["default"].get(url).then(function (response) {
    console.log('oderbook');
    // console.log(response.data)
    var clt = response.data;
    var object = {};
    console.log(clt);
    // let chunked = [[1,2,3], [4,5,6], [7,8,9]];
    for (var i = 0; i < clt.length; i++) {
        console.log(clt[i]);
    }
    //    clt.map((item : any)=>{
    //         const newobject ={
    //         bids :item[1],
    //         asks : item[2],
    //         };
    //         Object.assign(object,{ss:newobject});
    //     })
    //     console.log(object)
});
