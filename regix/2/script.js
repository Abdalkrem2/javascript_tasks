let fname=document.getElementById("fname");
let lname=document.getElementById("lname");
let bdate=document.getElementById("bdate");
let email=document.getElementById("email");
let email2=document.getElementById("email2");
let password=document.getElementById("password");
let password2=document.getElementById("password2");
let error=document.getElementById("error");

fname.addEventListener("change",function () {
    if (!/^[a-zA-Z]+$/.test(fname.value)) {
        error.innerHTML+="<br>First name must contain only letters";
        error.style.color="red";
    }
    else{
        error.innerHTML="";
    }
})

lname.addEventListener("change",function () {
    if (!/^[a-zA-Z]+$/.test(lname.value)) {
        error.innerHTML+="<br>Last name must contain only letters";
        error.style.color="red";
    }
    else{
        error.innerHTML="";
    }
})

bdate.addEventListener("change",function () {
    if (!/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(bdate.value)) {
        error.innerHTML+="<br>Birth date must be in the format YYYY-MM-DD";
        error.style.color="red";
    }
    else{
        error.innerHTML="";
    }
})

email.addEventListener("change",function () {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        error.innerHTML+="<br>Email must be in the format [EMAIL_ADDRESS]";
        error.style.color="red";
    }
    else{
        error.innerHTML="";
    }
})

email2.addEventListener("change",function () {
    if (email2.value!==email.value) {
        error.innerHTML+="<br>Emails do not match";
        error.style.color="red";
    }
    else{
        error.innerHTML="";
    }
})

password.addEventListener("change",function () {
    if (!/^[A-Z]/.test(password.value)) {
        error.innerHTML+="<br>Password must start with a capital letter";
        error.style.color="red";
    }
    else if (!/[0-9]{2,}/.test(password.value)) {
        error.innerHTML+="<br>Password must contain at least two numbers";
        error.style.color="red";
    }
    else if (!/[^A-Za-z0-9]/.test(password.value)) {
        error.innerHTML+="<br>Password must contain at least one special character or symbol";
        error.style.color="red";
    }
    else if (password.value.length<8||password.value.length>32) {
        error.innerHTML+="<br>Password must be between 8 and 32 characters long";
        error.style.color="red";
    }
    else{
        error.innerHTML="";
    }
})

password2.addEventListener("change",function () {
    if (password2.value!==password.value) {
        error.innerHTML+="<br>Passwords do not match";
        error.style.color="red";
    }
    else{
        error.innerHTML="";
    }
})