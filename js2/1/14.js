let s = "hello world";

s = s.replace(/\b\w/g, c => c.toUpperCase());//g globel w one word b boundery |word| |word|

console.log(s);