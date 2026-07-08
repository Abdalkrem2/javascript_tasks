function evenIndexOddLength(arr) {
    let result = [];
    let i = 0;

    while (i < arr.length) {
        if (i % 2 === 0 && arr[i].length % 2 !== 0) {
            result[result.length] = arr[i];
        }

        i++;
    }

    return result;
}