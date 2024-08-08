var typed = new Typed(".auto-type", {
  strings: ["En la calma y la serenidad encuentro mi paz interior.!"],
  typeSpeed: 50,
  backspeed: 50,
  loop: true,
});
// Fin primera Parte //

window.addEventListener("scroll", function () {
  var aboutSection = document.getElementById("about");
  var aboutPosition = aboutSection.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.3;

  if (aboutPosition < screenPosition) {
    aboutSection.classList.add("appear");
  }
});
