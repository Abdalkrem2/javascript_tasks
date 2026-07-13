const heading = document.getElementById("hello");

heading.addEventListener("mouseover", function () {
    heading.style.backgroundColor = "Yellow";
    heading.style.fontSize = "50px";
})

heading.addEventListener("mouseout", function () {
    heading.style.backgroundColor = "white";
    heading.style.fontSize = "24px";
})
