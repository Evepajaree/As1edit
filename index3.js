"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var usdtAmount = 290000;
var token = 0;
var url = 'https://api1.binance.com/api/v3/depth?symbol=BTCUSDT';
axios_1["default"].get(url).then(function (response) {
    var asks = response.data.asks; // ดึง api
    for (var _i = 0, asks_1 = asks; _i < asks_1.length; _i++) {
        var item = asks_1[_i];
        console.log(item); //ลองแสดงค่า 
        calculateOutputAmount(item); //เรียกใช้ฟังก์ชัน
    }
    console.log("Output BTC: ".concat(usdtAmount, "  ").concat(token, " ")); //แสดงค่าตอนวนทุกอย่างเสร็จ
});
function calculateOutputAmount(item) {
    var price = parseFloat(item[0]); //parseFloat เปลี่ยน string(ข้อความ)เป็นตัวเลข
    var volume = parseFloat(item[1]);
    console.log("price= " + price + "\tvolume= " + volume); //แสดงค่า
    if (usdtAmount > price) { // usdtAmount(ค่าที่รับ(เงินที่มี)) มากกว่า price(ราคาเหรียญ)
        token = volume + token; //  token = เหรียญ เมื่อเข้าเงื่อนไขเหรียญที่ถูกซื้อจะวนเก็บใน token
        usdtAmount = usdtAmount - price; //usdtAmount(เงินที่มี)ไปลบกับราคาเหรียญแล้วเก็บเงินที่เหลือใน usdtAmount ต่อ
    }
}
