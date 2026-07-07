function calculateSupply(age,amount)//3*365*(100-30)
{
    console.log(amount*365*(100-age))
}

let age=Number( prompt("enter your age"))
let amount=Number( prompt("enter amount per day"))
calculateSupply(age,amount);
