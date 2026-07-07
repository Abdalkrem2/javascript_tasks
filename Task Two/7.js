function price(drink){
 switch(drink){
    case "Banana":console.log("The price of a banana drink is 20 dollars")
    break;
    case "Apple":console.log("The price of a apple drink is 40 dollars")
    break;
    case "Mix":console.log("The price of a mix drink is 50 dollars")
    break;
default: console.log("enter one of these drinks banana,apple,mix")
 }   
}

let drink =prompt("Enter the name of the drink: ")
price(drink)