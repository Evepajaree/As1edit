import axios from "axios";
const url = 'https://api1.binance.com/api/v3/depth?symbol=BTCUSDT';



axios.get(url).then(response => {
    console.log('oderbook')
    console.log(response.data)
    // const clt = response.data;

    // const object = {};

    // console.log(clt);
    // let chunked = [[1,2,3], [4,5,6], [7,8,9]];

    // for(let i = 0; i < clt.length; i++) {
    
            
    //     console.log(clt[i]);
        
    }
});
