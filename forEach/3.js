function showFirstAndLast(arr){
    arr.forEach((element,index,array) => {
        array[index]=element[0]+element[element.length-1];
    });
    console.log(arr)
}
showFirstAndLast(['colt','matt', 'tim', 'udemy'])