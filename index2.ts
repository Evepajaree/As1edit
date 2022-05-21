import axios from "axios";
import * as dayjs from 'dayjs'
let a = {};
let b = {};
const url ='https://api1.binance.com/api/v3/klines?interval=1h&symbol=BTCUSDT';


axios.get(url).then(response =>{
 
  const candle = response.data;
  for(let key of candle){
      a = {
        'open'  : key[1],
        'hight' : key[2],
        'low' :   key[3],
        'close' : key[4]
      }
      const formatdate = dayjs(key[0]).format("YYYY-MM-DD h:mm:ss");
      Object.assign(b,{[formatdate]:a});
  }
  console.log(b)   
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
