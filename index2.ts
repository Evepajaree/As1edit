import axios from "axios";
import * as dayjs from 'dayjs' //ไลบารี่ใช้แปลง ว/ด/ป
let a = {};
let b = {};
const url ='https://api1.binance.com/api/v3/klines?interval=1h&symbol=BTCUSDT';


axios.get(url).then(response =>{
 
  const candle = response.data; // ดึงข้อมูล Candlestick ของ ราคาเหรียญ BTC/USDT
  for(let key of candle){ //แยกข้อมูลในส่วนที่ไม่ต้องคำนวณใส่ใน object
      a = {
        'open'  : key[1],
        'hight' : key[2],
        'low' :   key[3],
        'close' : key[4]
      }
      const formatdate = dayjs(key[0]).format("YYYY-MM-DD h:mm:ss"); // เอา (Open time)  ในรูปแบบ YYYY-MM-DD hh:mm
      Object.assign(b,{[formatdate]:a}); //ให้ formatdate เป็นkey ให้ aเป็น value
  }
  console.log(b)   // b คือ Object ใหม่ที่เอามาแสดง
  
  
  
  
  
  
  
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
