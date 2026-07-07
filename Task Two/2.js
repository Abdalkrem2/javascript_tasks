let num = 1
for (let i = 1; i <= 4; i++) {
    let out = "";
    for (let j = 1; j <= i; j++) {
        out += num;
        num++;
    }
    console.log(out)
}