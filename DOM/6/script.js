let box = document.getElementById("box");

let colors = ["red", "blue", "green", "yellow", "purple","black"];

let time = 1000; // الوقت بالـ milliseconds

let index = 0;

setInterval(function () {

    box.style.backgroundColor = colors[index];

    index++;

    if (index === colors.length) {
        index = 0;
    }

}, time);