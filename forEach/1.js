function doubleValues(arr){
    arr.forEach((num,index,array )=> {
        array[index]=num*2
    });
    console.log(arr)
}

doubleValues([1,2,3,4])