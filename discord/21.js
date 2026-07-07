function randomBetweenNumbers(min,max){
    console.log(Math.floor(Math.random() * (max - min + 1)) + min);
}
randomBetweenNumbers(5,10)