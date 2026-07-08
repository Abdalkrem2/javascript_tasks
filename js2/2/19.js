
function repeatChar(str, ch) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ch) {
            count++;
        }
    }

    return count;
}

let string = "alex mercer madrasa rashed2 emad hala";

console.log(repeatChar(string, "a")); // 6
console.log(repeatChar(string, "z")); // 0