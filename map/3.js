function capitalizeNames(arr){
   let res= arr.map((str)=>{
        str=str.toLowerCase()
     
        return str.substring(1,0).toUpperCase()+str.substring(1)
    })
    console.log(res)
}



capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])