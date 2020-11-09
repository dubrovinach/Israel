"use strict";

// let programsLinks = document.querySelectorAll(".programs__link");

// programsLinks.forEach(function (link) {
//   link.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     console.log(evt.target.tagName);
//     if (evt.target.tagName == "svg" || evt.target.tagName == "SPAN") {
//       programsLinks.forEach((child) =>
//         child.classList.remove("programs__link--active")
//       );

//       link.classList.add("programs__link--active");
//     }
//   });
// });

let programsLinks = document.querySelector(".programs__wrapper ul");

programsLinks.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (
    evt.target.tagName == "LI" ||
    evt.target.tagName == "svg" ||
    evt.target.tagName == "SPAN"
  ) {
    evt.target.classList.remove("programs__link--active");
    evt.target.hidden = "true";
  }

  link.classList.add("programs__link--active");
  evt.target.hidden = "false";
});

//слайдер блока с отзывами

let btnRight = document.querySelector(".slider__button--right");
let btnLeft = document.querySelector(".slider__button--left");
let slides = document.querySelectorAll(".reviews__list blockquote");

let activeElement = 0;

btnRight.addEventListener("click", function () {
  slides[activeElement].classList.add("visually-hidden");
  if (activeElement + 1 == slides.length) {
    activeElement = 0;
  } else {
    activeElement++;
  }
  slides[activeElement].classList.remove("visually-hidden");

  err.innerHTML = activeElement + 1;
});

let err = document.querySelector(".err");

btnLeft.addEventListener("click", function () {
  slides[activeElement].classList.add("visually-hidden");
  if (activeElement - 1 < 0) {
    activeElement = slides.length - 1;
  } else {
    activeElement--;
  }
  slides[activeElement].classList.remove("visually-hidden");

  err.innerHTML = activeElement + 1;
});

// переключатель блока программы

let programsList = document.querySelector(".programs__wrapper ul");

function toggleLinks(evt) {
  let dataTab = evt.target.getAttribute("data-tab");
  let programsParagraphs = document.querySelectorAll(".programs__paragraph");
  for (let i = 0; i < programsParagraphs.length; i++) {
    if (dataTab == i) {
      programsParagraphs[i].classList.remove("visually-hidden");
    } else {
      programsParagraphs[i].classList.add("visually-hidden");
    }
  }
}

programsList.addEventListener("click", toggleLinks);

// переключатель блока частые вопросы

let questions = document.querySelector(".questions__wrapper ul");
let questionsDescriptions = document.querySelector(
  ".questions__wrapper ul li p"
);

function openDescription(evt) {
  evt.preventDefault();
  // for (let i = 0; i < questionsDescriptions.length; i++) {
  //   if (questionsDescriptions[i].classList.contains("visually-hidden")) {
  //     questionsDescriptions[i].classList.remove("visually-hidden");
  //   } else {
  //     questionsDescriptions[i].classList.add("visually-hidden");
  //   }
  // }
  console.log(evt.currentTarget);
  if (evt.target.tagName == "A") {
    let parentElement = evt.target;
    let cont = true;

    while (cont) {
      parentElement = parentElement.parentElement;
      if (parentElement.tagName == "LI") {
        cont = false;
      }
    }
    parentElement.querySelector("p").classList.toggle("visually-hidden");
  }
}

questions.addEventListener("click", openDescription);
