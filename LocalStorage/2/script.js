let button=document.getElementById("btn");

button.addEventListener("click",function(){
    let name=document.getElementById("name").value
    let email=document.getElementById("email").value
    const mobile=document.getElementById("mobile").value
    let obj={};
   obj["name"]=name;
   obj["email"]=email;
  
   obj["mobile"]=mobile;
  
    sessionStorage.setItem("obj",JSON.stringify(obj))


    const table = document.getElementById("table");
    const data=JSON.parse(sessionStorage.getItem("obj"))
table.innerHTML += `

<tr>
<td>${name}</td>
<td>${email}</td>
<td>${mobile}</td>
</tr>

`;
    console.log(JSON.parse( localStorage.getItem("obj")))
 
})