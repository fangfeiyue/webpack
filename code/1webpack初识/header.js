import { appendElement } from "./appendElement";

function Header() {
  appendElement(document.getElementById("root"), "header");
}

export {
  Header
};
