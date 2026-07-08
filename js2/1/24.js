
function palindrome(s){

s=s.toLowerCase();
s=s.split("")
let ans=""
for(let i=0;i<s.length;i++){
    if(s[i]>='a'&&s[i]<='z'){
        ans+=s[i]
    }
}
ans=ans.split("")
let i=0;
let j=ans.length-1
// console.log(ans)
while(i++<j--){
if(ans[i]!=ans[j]){
return "false"
}
}
return "true"
}


let s="A man, a plan, a canal, Panama!"
console.log(palindrome(s))
