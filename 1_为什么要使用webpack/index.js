function appendEl(content) {
  var root = document.getElementById('root');
  var el = document.createElement('div');

  el.innerText = content;
  root.append(el);
}

function appendHeader() {
  appendEl("header");
}

function appendContent() {
  appendEl("content");
}

function appendFooter() {
  appendEl("footer");
}

appendHeader();
appendContent();
appendFooter();

