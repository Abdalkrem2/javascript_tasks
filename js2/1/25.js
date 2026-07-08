function freq(s){
    s=s.split("")
let map=new Map();
for(let i=0;i<s.length;i++){
    if(map.has(s[i]))
map.set(s[i],map.get(s[i])+1)
else{
    map.set(s[i],1)
}
}
return map;
}





let s="mississippi"

console.log(freq(s))