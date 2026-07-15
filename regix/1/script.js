let users = JSON.parse(localStorage.getItem("users")) || [];
let button=document.getElementById("reg-btn");
let loginbtn = document.getElementById("login-btn");
button.addEventListener("click",function () {
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
   
    users.push({name:name,email:email,password:password})
    localStorage.setItem("users",JSON.stringify(users));
    
})

loginbtn.addEventListener("click",function () {
    let email=document.getElementById("loginemail").value;
    let password=document.getElementById("loginpassword").value;

    for (let i = 0; i < users.length; i++) {
        if(users[i].email===email&&users[i].password===password){
            alert("Login successful");
            break;
        }
        
    }
    
})
