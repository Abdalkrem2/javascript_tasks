function middleOfArray(arr){
    let length=Math.floor(arr.length/2)
   
if(arr.length%2!=0)
    return arr[length]
else
    return [arr[length-1],arr[(length)]]
}

console.log(middleOfArray([1,4,5,1,4,5]))