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
    var price = (+item[0]); //ใส่+หน้าตัวแปร itemเพื่อ เปลี่ยน string(ข้อความ)เป็นตัวเลข
    var volume = (+item[1]);
    console.log("price= " + typeof (price) + "\tvolume= " + volume); //แสดงค่า    typeof(price)เป็นการเช็คค่าว่าstring เปลี่ยนเป็น number หรือยัง
    if (usdtAmount >= price * volume) { // usdtAmount(ค่าที่รับ(เงินที่มี)) มากกว่า price(ราคาเหรียญ) ที่คูณ volume เพราะราคาเหรียญเป็นราคาต่อ1เหรียญ
        token = volume + token; //  token = เหรียญ เมื่อเข้าเงื่อนไขเหรียญที่ถูกซื้อจะวนเก็บใน token
        usdtAmount = usdtAmount - (price * volume); //usdtAmount(เงินที่มี)ไปลบกับราคาเหรียญแล้วเก็บเงินที่เหลือใน usdtAmount ต่อ
    }
    else if (usdtAmount < price * volume) {
        var token1 = (usdtAmount * 1) / price; //ถ้ามีเงินน้อยกว่าราคาเหรียญก็เทียบบัญญัติเพื่อซื้อ แล้วเก็บค่าใน token1           
        token = token1 + token; // เอาเหรียญที่ต้องการบวกเพิ่มไปในกระเป๋า
        usdtAmount = usdtAmount - usdtAmount;
    }
}
