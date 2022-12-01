"use strict";
// Selecionar todos os slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
  
});

// Selecionar o botão de próximo no slide
const nextSlide = document.querySelector(".btn-next");

// Contador de slides
let curSlide = 0;

// Definindo número máximo de slides
let maxSlide = slides.length - 1;

// Adicionando evento de passar o slide
nextSlide.addEventListener("click", function () {
  // Checando se o slide atual é o último e passando ao primeiro 
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  // Movendo o slide para 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// Selecionando o botão anterior
const prevSlide = document.querySelector(".btn-prev");

// Adicionando evento de voltar o slide
prevSlide.addEventListener("click", function () {
  // Checando se o slide atual é o primeiro e passando ao último 
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  // Movendo o slide para 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});