var typed = new Typed(".auto-type", {
  strings: ["En la calma y la serenidad encuentro mi paz interior.!"],
  typeSpeed: 50,
  backspeed: 50,
  loop: true,
});
// Fin primera Parte //

document.querySelectorAll("#temario .lista a").forEach((elemento) => {
  elemento.addEventListener("click", () => {
    document.querySelector("#temario .activo").classList.remove("activo");
    elemento.parentElement.classList.add("activo");
  });
});
