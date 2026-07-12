function valTimesIndex(arr){
    let res=arr.map((num,index)=>{
        return num*index
    })
    console.log(res)
}
valTimesIndex([1,2,3])