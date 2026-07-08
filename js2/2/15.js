function removeFromArray(k,nums){
    let i=0;
while(i<nums.length){
    if(nums[i]===k){
        let j=i
        while(j<nums.length-1){
            nums[j]=nums[j+1]
            j++;
        }
        nums.pop()
        break;
    }
    i++;
}
return nums;
}

console.log(removeFromArray(2,[1,2,3,4]))