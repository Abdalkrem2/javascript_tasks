function oddArray(nums){
    let arr=[]
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2!=0){
            arr.push(nums[i])
        }
    }
    return arr
}

console.log(oddArray([1,2,3,4,5]))