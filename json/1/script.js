let button=document.getElementById("btn");

button.addEventListener("click",function(){
    let subject=document.getElementById("subject").value
    let user=document.getElementById("user").value

    const area=document.getElementById("area").value
    const technology=document.getElementById("technology").value
    let obj={};
   obj["subject"]=subject;
   obj["user"]=user;
   obj["area"]=area;
   obj["technology"]=technology;
  
    sessionStorage.setItem("obj",JSON.stringify(obj))


    const container = document.getElementById("container");
    const data=JSON.parse(sessionStorage.getItem("obj"))
container.innerHTML += `
    <div class="card" style="height:200px; ">
<p>subject: ${data.subject}</p>
<p>user-role: ${data.user}</p>
<p>Description: ${data.area}</p>
<p>technology: ${data.technology}</p>


    </div>
`;
    console.log(JSON.parse( localStorage.getItem("obj")))
 
})