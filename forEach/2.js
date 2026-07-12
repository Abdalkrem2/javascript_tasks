function onlyEvenValues(arr){
    arr.forEach((num,index,array)=>{
        if(num%2!=0){
            array.splice(index,1)//to remove the first occurence of element starting from index
        }
       
    })
     console.log(arr)
}
onlyEvenValues([1,2,3,4,5,6])