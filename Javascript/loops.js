for(let i=1;i<=5;i++) {
    console.log("====================================");
    console.log();
    console.log("====================================");
    
}


let arr=[10,20,30,40,50,60];
let str="javascript"

//for-of loop
for(let val of arr) {
    console.log(val);
}
for(let ch of str) {
    console.log(ch);
}


//for-in loop (fetches only index values)
for(let ind in arr) {
    console.log(ind);
}
for(let ind in str) {
    console.log(ind);
}


//for-Each loop
arr.forEach((val,ind,a)=> {
    console.log(val,"-> ",ind,"-> " ,a);
})


console.log("======================MAP Function====================")
let prices=[500,150,200,250,7000,4999,40000,5666,999,98888];
console.log(prices)

let discountedPrices = prices.map((x)=>{
    //console.log(x);
    return x-x/10;
});
console.log(discountedPrices);


let newPrices1 = prices.map((x)=>{
    return x+250;
});
console.log(newPrices1);


console.log("======================FILTER Function====================")

let filteredPrices = discountedPrices.filter((x)=>{
    return x>=150&&x<=5000;
})
console.log(filteredPrices);


console.log("======================REDUCE Function====================")

filteredPrices.reduce((pre,curVal,curInd,a)=>{
    console.log(pre,"->",curVal,"->",curInd,"->",a)
})

const totalPrice = filteredPrices.reduce((acl,val)=>{
    return acl+val;
},500)//500 will be added to the final result
console.log(totalPrice);