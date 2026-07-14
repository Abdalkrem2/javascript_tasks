import { jsonObject } from "./data.js"
let table = document.getElementById("table");
// console.log(jsonObject)

const button = document.getElementById("b")
button.addEventListener("click", function () {
    console.log("click");
    table.style.display = "block"
});

button.addEventListener("dblclick", function () {
    table.style.display = "none"
});

let data = JSON.parse(jsonObject)
let arr = data.users;
arr.forEach((element) => {
    table.innerHTML += `
<tr>
<td>${element.firstName}</td>
<td>${element.phone}</td>
<td>${element.email}</td>
</tr>
`

})
