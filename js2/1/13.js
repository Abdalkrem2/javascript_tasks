let s="racecar"
let flag=true;
let i=0
let j=s.length-1
while(i++<j--){
    if(s[i]!=s[j])
        flag=false
}
console.log(flag)