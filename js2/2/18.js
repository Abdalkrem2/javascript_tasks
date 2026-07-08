function shorterInArray(s){
    let shortest=s[0].length
    let ans=s[0]
    let i=0;
    while(i<s.length){
if(s[i].length<shortest){
    shortest=s[i].length
    ans=s[i]
}
i++;
}
return ans;
}

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
console.log(shorterInArray(strings))