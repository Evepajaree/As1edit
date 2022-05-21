import axios from "axios";
let usdtAmount : number = 290000;
let token : number = 0;
const url ='https://api1.binance.com/api/v3/depth?symbol=BTCUSDT';

axios.get(url).then(response =>{
 
  const orderBook = response.data;
  const asks = response.data.asks;
  for( let item of asks){

    calculateOutputAmount(item);
   }

    console.log(`Output BTC: ${usdtAmount}  ${token} `);

});

function calculateOutputAmount(item : any) {

    let price : number = parseFloat(item[0]);
    let volume : number = parseFloat(item[1]);
    console.log("price= "+price+"\tvolume= "+volume);
    if(usdtAmount > price){
        token = volume + token;
        usdtAmount = usdtAmount - price ;
    }

}