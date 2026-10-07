let n=123
let rem=0
let res=0
while(n!=0) {
    rem=n%10
    res = res*10+rem
    n=Math.floor(n/10)
}
console.log(res)