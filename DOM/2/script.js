const country = document.getElementById("country");
const img=document.getElementById("flag");

let flags={
    jordan:"jordan.svg",
    usa:"images.png",
    germany:"germany.png"
}

country.addEventListener("change", function () {

    img.src = flags[this.value];

});
img.src=flags.jordan;