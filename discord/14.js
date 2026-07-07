function longerString(s1,s2,s3,s4,s5){
let res=s1.length;
let longest=s1;
if(s2.length>res){
    res=s2.length;
    longest=s2;
}
if(s3.length>res){
    res=s3.length;
    longest=s3;
}
if(s4.length>res){
    res=s4.length;
    longest=s4;
}
if(s5.length>res){
    res=s5.length;
    longest=s5;
}
console.log(longest)

}
longerString("asdfs","asf","asfsfsf","sfsfsfs","abdalkremslas")