import imgSrc from "./img/1.png";

const imgEl = new Image();
console.log(imgSrc)
imgEl.src = imgSrc;
document.getElementById("root").append(imgEl);
