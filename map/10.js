function extractFullName(arr){
let res=arr.map((obj)=>{
return `${obj.first} ${obj.last}`;
})
console.log(res)
}
extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
