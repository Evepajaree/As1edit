import axios from 'axios'
const url1 = 'https://ftx.com/api/markets/BTC/USDT'
const url2 = 'https://api1.binance.com/api/v3/avgPrice?symbol=BTCUSDT'
let a: number = 0
let b: number = 0

async function func() {
    let response = await axios.get(url1)
    console.log('Binance BTC Price:' + response.data.result.price + 'USDT')
    a = response.data.result.price
    response = await axios.get(url2)
    console.log('FTX BTC Price:' + response.data.price + 'USDT')
    b = response.data.price
    const sum = a - b
    const sum1 = sum*100/a
    console.log(sum1)
}

func()