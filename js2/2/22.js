function evenNumberEvenIndex(nums) {
    let result = [];
    let i = 0;

    while (i < nums.length) {

        if (i % 2 === 0 && nums[i] % 2 === 0) {
            result[result.length] = nums[i];
        }

        i++;
    }

    return result;
}