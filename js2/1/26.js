function vowels(s){
    if(s.includes("a"))
        s=s.replaceAll('a',1)
    if(s.includes("e"))
        s=s.replaceAll('e',2)
    if(s.includes("i"))
        s=s.replaceAll('i',3)
    if(s.includes("o"))
        s=s.replaceAll('o',4)
    if(s.includes("u"))
        s=s.replaceAll('u',5)

    return s;
}

let s="hello world"
console.log(vowels(s))