//token
const token = `8cf378a545b8ca93a4adcdbcbc3f8ae7`;

//get live


// todo add this. to store
async function GetIt(){

    const request = await fetch(`http://api.coinlayer.com/api/live?access_key=${token}`, {
        method: `GET`,
        Headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    
    let data = await request.json();

    let bit = data.rates.BTC
    let ether = data.rates.ETH
    let doge = data.rates.DOGE
    let bin = data.rates.BNB
    
    return [bit, ether, doge, bin]
}

const list = Promise.resolve(GetIt())

const bit = list.then((value) => {
    return String(value[0])
  });

const ether = list.then((value) => {
    return String(value[1])
  });

const doge = list.then((value) => {
    return String(value[2])
  });

const binance = list.then((value) => {
    return String(value[3])
  });




const changeCrypto = async (id) => {       
    let change =  document.getElementById('changeMe')
    switch(id){
        case 'b1': {
            
            change.innerHTML = await bit;
            break;
        }
        case 'b2': {
            
            change.innerHTML = await ether
            break;
        }
        case 'b3': {
            
            change.innerHTML = await doge
            break;
        }
        case 'b4': {
            
            change.innerHTML = await binance
            break;
        }
    
    }
}



