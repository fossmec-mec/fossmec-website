// HERO TYPING ANIMATION
const typed = document.getElementById("typed");
const text = "FOSSMEC";

if (typed) {
  typed.textContent = "";

  let i = 0;

  function type() {
    if (i < text.length) {
      typed.textContent += text[i];
      i++;
      setTimeout(type, 100);
    }
  }

  type();
}