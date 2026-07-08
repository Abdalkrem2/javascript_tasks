function minInArray(nums){
    let min=nums[0]
for(let i=1;i<nums.length;i++){
    if(min>nums[i]){
        min=nums[i]
    }
}
return min;
}

console.log(minInArray([4,5,1,6]))