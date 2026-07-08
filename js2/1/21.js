let s1="silent"
let s2="listen"
s2=s2.split('');
flag=true;
for(let i=0;i<s2.length;i++)
    if(!s1.includes(s2[i]))
        flag=false;

console.log(flag)