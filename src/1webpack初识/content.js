import { appendElement } from "./appendElement";

function Content() {
  appendElement(document.getElementById("root"), "content");
}

export {
  Content
};