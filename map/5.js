function makeStrings(arr){
   let res= arr.map((obj)=>{
    if(obj.age>=18){
        return  `${obj.name} can go to the matrix`
    }else{
          return  `${obj.name} is under age!!`
    }
    })
    console.log(res)
}
 makeStrings([
   {
        name: "Angelina Jolie",
        age: 80
   },
   {
        name: "Eric Jones",
        age: 2
    },
   {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
       age: 16
    },
   {
        name: "Bob Ziroll",
        age: 100
    }
  ])