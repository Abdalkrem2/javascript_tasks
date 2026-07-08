function sumArray(nums){
    let sum=0;
    for(let i of nums){
        sum+=i
    }
    return sum
}
console.log(sumArray([1,2,3]))