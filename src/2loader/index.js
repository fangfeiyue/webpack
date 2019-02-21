import imgSrc from "./img/1.png";

const img = new Image();
console.log(imgSrc)
img.src = imgSrc;
document.getElementById("root").append(img);
