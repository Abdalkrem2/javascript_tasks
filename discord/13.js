function shorterString(s1,s2,s3,s4,s5){
let res=s1.length;
let shortest=s1;
if(s2.length<res){
    res=s2.length;
    shortest=s2;
}
if(s3.length<res){
    res=s3.length;
    shortest=s3;
}
if(s4.length<res){
    res=s4.length;
    shortest=s4;
}
if(s5.length<res){
    res=s5.length;
    shortest=s5;
}
console.log(shortest)

}
shorterString("asdfs","asf","asfsfsf","sfsfsfs","abdalkremslas")