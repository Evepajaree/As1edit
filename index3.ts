import axios from "axios";
let inputUSDT : number = 290000;
let token : number = 0;
const url ='https://api1.binance.com/api/v3/depth?symbol=BTCUSDT';

axios.get(url).then(response =>{
 
  const orderBook = response.data;
  const asks = response.data.bids;
  for( let item of asks){

    calculateOutput(item);
   }

    console.log(`Output BTC: ${inputUSDT}  ${token} `);

});

function calculateOutput(orber : any) {

    let a : number = parseFloat(orber[0]);
    let b : number = parseFloat(orber[1]);
    console.log("price= "+a+"\tvolume= "+b);
    if(inputUSDT > a){
        token = b + token;
        inputUSDT = inputUSDT - a ;
    }

}