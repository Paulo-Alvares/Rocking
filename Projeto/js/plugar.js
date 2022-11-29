const stepFase = document.querySelectorAll(".fase");
let contStep = 0;
var imgVar = "";

function transicao() {
  const bola = document.querySelector(".bola");
  const botoes = document.querySelectorAll(".botoes");
  for (key of botoes) {
    key.addEventListener("click", () => {
      bola.classList.toggle("active");
    });
  }
}

function modalErro(frase1, frase2) {
  var divValidacao = document.querySelector(".validacao");
  var textModal = document.querySelector(".titulo_validacao");
  var textValidacao = document.querySelector(".texto_validacao");
  textModal.innerHTML = frase1;
  textValidacao.innerHTML = frase2;
  divValidacao.classList.add("active");
  setTimeout(() => {
    divValidacao.classList.remove("active");
  }, 3000)
}

function modalSucesso(frase1, frase2) {
  var divValidacao = document.querySelector(".validacao");
  var textModal = document.querySelector(".titulo_validacao");
  var textValidacao = document.querySelector(".texto_validacao");

  textModal.innerHTML = frase1;
  textModal.style.background = "green";
  textModal.style.color = "white";
  textModal.style.fontSize = "1.1em";
  textValidacao.innerHTML = frase2;

  divValidacao.classList.add("active");
  setTimeout(() => {
    divValidacao.classList.remove("active");
  }, 3000)
}

function proximaFase() {
  var nomeVar = in_nome_cadastro.value;
  var emailVar = in_email_cadastro.value;
  var senhaVar = in_senha_cadastro.value;
  var confSenha = in_confirma_cadastro.value;
  var validacao = true;
  var validacaoEmail = /([a-z0-9]{5,10}\.{0,1}[a-z0-9]+@{1}[a-z]{1}[a-z]{2,20}\.[a-z]{1,10})/;

  if (contStep == 0 && (nomeVar == "" || emailVar == "")) {
    validacao = false;
    modalErro("ERRO", "OS CAMPOS DE CADASTRO NÃO PODEM SER VAZIOS!")
  } else if (contStep == 0 && !validacaoEmail.test(emailVar)) {
    validacao = false;
    modalErro("ERRO", "EMAIL INVALIDO! CERTIFIQUE-SE QUE<BR> SEU EMAIL SEGUE ESSA ESTRUTURA nome@example.com ")
  }

  if (contStep == 1 && senhaVar.length <= 8) {
    validacao = false;
    modalErro("ERRO", "A SENHA DEVE TER MAIS DE 8 CARACTERES ")
  }

  if (confSenha != senhaVar && validacao == true) {
    validacao = false;
    modalErro("ERRO", "AS SENHAS NÃO COINCIDEM")
  }

  if (contStep < stepFase.length - 1 && validacao) {
    stepFase[contStep].classList.remove("active");
    contStep++;
    stepFase[contStep].classList.add("active");
  }
}

function voltaFase() {
  if (contStep >= 0) {
    contStep--;
    stepFase[contStep + 1].classList.remove("active");
    stepFase[contStep].classList.add("active");
  }
}

function verImagem() {
  var imagemInput = in_img.files[0];
  var receberImagem = new FileReader();
  receberImagem.addEventListener("load", (arquivo) => {
    imgVar = arquivo.target.result;
    imgLoading.style.display = "block";
    imgEntrada.style.display = "none";
    imgLoading.src = imgVar;
  });
  receberImagem.readAsDataURL(imagemInput);
}

transicao();