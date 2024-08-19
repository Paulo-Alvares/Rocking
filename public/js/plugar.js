const stepFase = document.querySelectorAll(".fase");
let contStep = 0;
var imgVar = "";

// Transição suave da bola
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

// Div de validação
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

// Avançar e voltar o estágio
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

// function verImagem() {
//   var imagemInput = in_imagem_cadastro.files[0];
//   var receberImagem = new FileReader();
//   receberImagem.addEventListener("load", (arquivo) => {
//     imgVar = arquivo.target.result;
//     imgLoading.style.display = "block";
//     imgEntrada.style.display = "none";
//     imgLoading.src = imgVar;
//   });
//   receberImagem.readAsDataURL(imagemInput);
// }

// Login
// function plugar() {
//   var emailVar = in_email_login.value;
//   var senhaVar = in_senha_login.value;

//   if (emailVar != "" && senhaVar != "") {
//     fetch("/usuarios/autenticar", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         emailServer: emailVar,
//         senhaServer: senhaVar,
//       }),
//     })
//       .then(function (resposta) {
//         if (resposta.ok) {
//           resposta.json().then(function (json) {
//             sessionStorage.setItem("INFO_USUARIO", JSON.stringify(json));
//             var idUsuario = JSON.parse(
//               sessionStorage.getItem("INFO_USUARIO")
//             ).idUsuario;

//             atualizarVisita(idUsuario);
//               modalSucesso("Usuário Encontrado!","Redirecionando para a tela de login");
//             setTimeout(() => {
//               window.location = "dashboard-book.html";
//             }, 2000);

         
//           });
//         } else {
//           modalErro("Usuário não encontrado!","Tenta outra vez");
//           ;
//         }
//       })

//       .catch(function (resposta) {
//         console.log(`#ERRO: ${resposta}`);
//         console.log("Vai");
//       });
//   } else {
//     modalErro("Erro","Informe o email e a senha")
//     ;
//   }
// }

function plugar() {

  var emailVar = in_email_login.value;
  var senhaVar = in_senha_login.value;

  if (emailVar == "" || senhaVar == "") {
      cardErro.style.display = "block"
      mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";
      finalizarAguardar();
      return false;
  }

  console.log("FORM LOGIN: ", emailVar);
  console.log("FORM SENHA: ", senhaVar);

  fetch("/usuarios/autenticar", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          emailServer: emailVar,
          senhaServer: senhaVar
      })
  }).then(function (resposta) {
      console.log("ESTOU NO THEN DO entrar()!")

      if (resposta.ok) {
          console.log(resposta);

          resposta.json().then(json => {
              console.log(json);
              console.log(JSON.stringify(json));

              sessionStorage.EMAIL_USUARIO = json.email;
              sessionStorage.NOME_USUARIO = json.nome;
              sessionStorage.ID_USUARIO = json.id;

              setTimeout(function () {
                  window.location = "../dashboard/dashboard.html";
              }, 1000); // apenas para exibir o loading

          });

      } else {

          console.log("Houve um erro ao tentar realizar o login!");

          resposta.text().then(texto => {
              console.error(texto);
              finalizarAguardar(texto);
          });
      }

  }).catch(function (erro) {
      console.log(erro);
  })

  return false;
}

// Cadastro
function cadastrar() {
  var nomeVar = in_nome_cadastro.value;
  var emailVar = in_email_cadastro.value;
  var senhaVar = in_senha_cadastro.value;
  const boll = document.querySelector(".bola");
  const textValidacao = document.querySelector(".texto_validacao");
  var divValidacao = document.querySelector(".validacao");
  
  fetch("/usuarios/cadastrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nomeServer: nomeVar,
      emailServer: emailVar,
      senhaServer: senhaVar,
      // imgServer: imgVar,
    })
  }).then((resposta)=>{
    if(resposta.ok){
      modalSucesso("CADASTRO REALIZADO COM SUCESSO!","Agora vamos fazer Login :)")
      criarMetricaUsuario(emailVar);
      setTimeout(()=>{
        boll.classList.remove("active")
      },2000)
      
    }
    else{
      modalErro("ERRO","USUÁRIO JÁ CADASTRADO")
    }
    })
  .catch((erro)=>{
    console.log(erro);
  })
}