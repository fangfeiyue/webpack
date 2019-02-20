import img from "./img/1.png";

function AppendImg(dom, src) {
  console.log(img)
  const img = document.createElement("img");
  img.src = "./img/1.png";
  dom.append(img);
  console.log("执行了图片");
}

export {
  AppendImg
};