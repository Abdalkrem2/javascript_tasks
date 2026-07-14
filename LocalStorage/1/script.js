let button=document.getElementById("btn");

button.addEventListener("click",function(){
    let name=document.getElementById("name").value
    let age=document.getElementById("age").value
    const selectedRadio = document.querySelector('input[name="gender"]:checked').value;
    const area=document.getElementById("area").value
    const major=document.getElementById("major").value
    const checkedBoxes = document.querySelectorAll('input[name="lang"]:checked');
    const selectedValues=Array.from(checkedBoxes).map(s=>s.value)
    let obj={};
   obj["name"]=name;
   obj["age"]=age;
   obj["gender"]=selectedRadio;
   obj["area"]=area;
   obj["major"]=major;
   obj["languages"]=selectedValues;
    localStorage.setItem("obj",JSON.stringify(obj))


    const container = document.getElementById("container");
    const data=JSON.parse(localStorage.getItem("obj"))
container.innerHTML += `
    <div class="card" style="height:200px; ">
<p>Name: ${data.name}</p>
<p>Age: ${data.age}</p>
<p>Gender: ${data.gender}</p>
<p>Description: ${data.area}</p>
<p>Major: ${data.major}</p>
<p>Fav Language: ${data.name}</p>

    </div>
`;
    console.log(JSON.parse( localStorage.getItem("obj")))
 
})