const stepFase = document.querySelectorAll(".fase");
let contStep = 0;

function transicao() {
  const bola = document.querySelector(".bola");
  const botoes = document.querySelectorAll(".botoes");
  for (key of botoes) {
    key.addEventListener("click", () => {
      bola.classList.toggle("active");
    });
  }
}

transicao();