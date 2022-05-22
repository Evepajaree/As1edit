import axios from "axios";
let usdtAmount : number = 290000;
let token : number = 0;
const url ='https://api1.binance.com/api/v3/depth?symbol=BTCUSDT';

axios.get(url).then(response =>{
  const asks = response.data.asks; // ดึง api
  for( let item of asks){
    console.log(item) //ลองแสดงค่า 
    calculateOutputAmount(item); //เรียกใช้ฟังก์ชัน
   }

    console.log(`Output BTC: ${usdtAmount}  ${token} `); //แสดงค่าตอนวนทุกอย่างเสร็จ

});

function calculateOutputAmount(item : object) { //any ข้อมูลอะไรก็ได้

    let price : number = parseFloat(item[0]); //parseFloat เปลี่ยน string(ข้อความ)เป็นตัวเลข
    let volume : number = parseFloat(item[1]);
    console.log("price= "+price+"\tvolume= "+volume); //แสดงค่า
    if(usdtAmount > price){ // usdtAmount(ค่าที่รับ(เงินที่มี)) มากกว่า price(ราคาเหรียญ)
        token = volume + token; //  token = เหรียญ เมื่อเข้าเงื่อนไขเหรียญที่ถูกซื้อจะวนเก็บใน token
        usdtAmount = usdtAmount - price ; //usdtAmount(เงินที่มี)ไปลบกับราคาเหรียญแล้วเก็บเงินที่เหลือใน usdtAmount ต่อ
    }

}