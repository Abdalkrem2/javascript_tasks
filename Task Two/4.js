function multiplication2( num1 , num2){
    let res=0
    for(let i=0;i<num1;i++){
        res+=num2;
    }
    return res

}

let num1=Number(prompt("enter the first num"));
let num2=Number(prompt("enter the second num"));
console.log(multiplication2(num1,num2));