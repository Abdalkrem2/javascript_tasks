function isPandigital(x){
    let arr=x.split("").map(Number);
    let freq=new Array(10).fill(0);
    for(let i=0;i<arr.length;i++){
        freq[arr[i]]+=1;
    }
    // console.log(freq)
    for(let i=0;i<=9;i++){
        if(freq[i]===0){
            
            return "false"
        }
    }
return "true";
}
let s=prompt("enter: ")
console.log(isPandigital(s))