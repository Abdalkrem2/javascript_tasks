const button=document.querySelectorAll(".hide-btn");
const paragraph =document.querySelectorAll("p");

for (let i = 0; i < button.length; i++) {
   
    button[i].addEventListener("click", function () {

         if(button[i].innerHTML=="Hide")
    {
       paragraph[i].style.display="none";
       button[i].parentElement.style.display="flex"
       button[i].parentElement.style.justifyContent="space-between";
       button[i].parentElement.style.alignItems="center";
       button[i].text="show";

            }        
            else 
    {

       paragraph[i].style.display="block";
         button[i].parentElement.style.display="block"

       button[i].text="Hide";
  
    }

    })}


