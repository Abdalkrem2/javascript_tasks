function extractKey(arr,key){
    let res =arr.map((obj)=>{
        return obj[key] 
    })
    console.log(res)
}
extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name')