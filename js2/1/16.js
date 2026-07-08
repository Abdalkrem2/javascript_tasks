let s = "There are 3 apples and 2 oranges";
s = s.split("");

let numbers = [];

for (let i = 0; i < s.length; i++) {
    if (s[i] >= '0' && s[i] <= '9') {
        numbers.push(s[i]);
    }
}

console.log(numbers);