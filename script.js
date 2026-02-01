let bit = document.getElementById('bitcoin')
let ether  = document.getElementById('ethereum')
let dog = document.getElementById('dogecoin')
console.log(bit)
console.log(ether)
console.log(dog)

let coins = "bitcoin,ethereum,cardano";
    let vs = "usd";

 let url = `https://api.coingecko.com/api/v3/simple/price?ids=${coins}&vs_currencies=${vs}`;

 let output = async function (){
    try{
 
    let response = await fetch(url)
    let ret = await response.json()
 
console.log(ret)

bit.innerText = ret.bitcoin.usd
ether.innerText = ret.ethereum.usd
dog.innerText = ret.cardano.usd
    }
    catch(err){
        console.log("error fetching in price",err)
    }
}
output()
