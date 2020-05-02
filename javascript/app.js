const texts = ["developer", "creative", "enthusiast", "designer"];
let count = 0;
let index = 0;
let currentText = "";
let character = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  character = currentText.slice(0, ++index);

  document.querySelector(".typing").innerHTML = "Hello, <br>I'm Stijn Van Linden. <br> Web " + character;
  if (character.length === currentText.length) {
    count++;
    index = 0;
  }

  setTimeout(type, 200);
})();
