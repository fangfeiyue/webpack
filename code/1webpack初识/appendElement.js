function appendElement(dom, str) {
  const el = document.createElement("div");
  
  el.innerText = str;
  dom.append(el);
}

export {
  appendElement
};
