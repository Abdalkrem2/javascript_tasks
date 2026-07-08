function powerElementIndex(nums) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {

        let power = 1;

  
            for (let j = 0; j < i; j++) {
                power *= nums[i];
            }

            result[result.length] = power;
        
    }

    return result;
}

let nums = [44,5,4,3,2,10];

console.log(powerElementIndex(nums));