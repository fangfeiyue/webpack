function appendElement(content) {
  const root = document.getElementById('root');
  const element = document.createElement('div');
  
  element.innerText = content;
  root.append(element);
}

export {
  appendElement
};
