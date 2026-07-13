bold=document.getElementById("bold-btn");
underline=document.getElementById("underline-btn")
italic=document.getElementById("italic-btn");

text=document.getElementById("text-box");
fontfamily=document.getElementById("font-family");
fontsize=document.getElementById("font-size");


bold.onclick=function () {
    text.style.fontWeight="bold";
}
underline.onclick=function () {
    text.style.textDecoration="underline";
}
italic.onclick=function () {
    text.style.fontStyle="italic";
}
fontfamily.onchange=function () {
    text.style.fontFamily=fontfamily.value;
}
fontsize.onchange=function () {
    text.style.fontSize=fontsize.value+"px";
}