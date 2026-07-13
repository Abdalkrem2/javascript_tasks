const pass=document.getElementById("password");
const repeatpass=document.getElementById("repeatpassword");
const error=document.getElementById("error");
pass.onchange=function () {
    if (pass.value.length<6) {
        error1.innerHTML="Password must be at least 6 characters";
        error1.style.color="red";
    }
    else{
        error1.innerHTML="";
    }
}
repeatpass.onchange=function () {
    if (repeatpass.value!==pass.value) {
        error2.innerHTML="Passwords do not match";
        error2.style.color="red";
    }
    else{
        error.innerHTML="";
    }
}