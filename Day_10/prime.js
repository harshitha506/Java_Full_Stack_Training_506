// let c=0;
// for(let i=1;i<=n;i++) {
    //     if(n%i==0) {
        //         c++;
        //     }
        // }
        // if(c==2) console.log("Prime Number");
        // else console.log("Not a Prime");
let n=7
let isPrime=true
for(let i=2;i<n;i++) {
    if(n%i==0) {
        isPrime=false;
        break;
    }
}
console.log(isPrime ? "Prime Number" : "Not a prime")