let myButton = document.getElementById("myButton");

myButton.addEventListener("click");

function clickEvent() {
  let body = document.querySelector("body");
  let buttonParagraphId = document.getElementById("button-paragraph");
  if (!buttonParagraphId) {
    let buttonParagraph = document.createElement("p");
    buttonParagraph.textContent = "Bonjour, vous avez cliqué sur le bouton !";
    buttonParagraph.id="button-paragraph";
    body.appendChild(buttonParagraph);
  }
}
