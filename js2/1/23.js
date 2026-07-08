let s="Web development is fascinating"
s=s.split(" ")
let max=s[0].length
let ans=s[0]
console.log(s)
for(let i=1;i<s.length;i++){
   if(max<s[i].length) {
    max=s[i].length
    ans=s[i]}
}
console.log(ans)