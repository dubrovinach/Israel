"use strict";

(function () {
  // переключатель блока программы
  let programsList = document.querySelector(".programs__wrapper ul");

  function toggleLinks(evt) {
    if (evt.target.tagName == "A") {
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
  }

  programsList.addEventListener("click", toggleLinks);

  let programsLinks = document.querySelectorAll(".programs__link");

  programsLinks.forEach(function (link) {
    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      if (evt.target.tagName == "A") {
        programsLinks.forEach((child) =>
          child.classList.remove("programs__link--active")
        );

        link.classList.add("programs__link--active");
      }
    });
  });

  //слайдер блока с отзывами

  let btnRight = document.querySelector(".slider__button--right");
  let btnLeft = document.querySelector(".slider__button--left");
  let slides = document.querySelectorAll(".reviews__list blockquote");

  let activeElement = 2;

  btnRight.addEventListener("click", function () {
    slides[activeElement].classList.add("visually-hidden");
    if (activeElement + 1 == slides.length) {
      activeElement = 0;
    } else {
      activeElement++;
    }
    slides[activeElement].classList.remove("visually-hidden");

    reviewsNumber.innerHTML = activeElement + 1;
  });

  let reviewsNumber = document.querySelector(".reviews__span");

  btnLeft.addEventListener("click", function () {
    slides[activeElement].classList.add("visually-hidden");
    if (activeElement - 1 < 0) {
      activeElement = slides.length - 1;
    } else {
      activeElement--;
    }
    slides[activeElement].classList.remove("visually-hidden");

    reviewsNumber.innerHTML = activeElement + 1;
  });

  // переключатель блока частые вопросы

  let questions = document.querySelector(".questions__wrapper ul");

  function openDescription(evt) {
    evt.preventDefault();
    if (evt.target.tagName == 'A') {
      let parentElement = evt.target;
      let cont = true;

      while (cont) {
        parentElement = parentElement.parentElement;
        if (parentElement.tagName == 'LI') {
          cont = false;
        }
      }
      parentElement.querySelector("p").classList.toggle("visually-hidden");
    }
  }

  questions.addEventListener("click", openDescription);

  // слайдер блока с фото

  //   let dots = document.getElementsByClassName('slider__toggle'),
  //     dotsArea = document.getElementById('slider'),
  //     slidesItems = document.getElementsByClassName('card__item'),
  //     slideIndex = 1;

  //   showSlides(slideIndex);

  //   function showSlides(n) {
  //     if (n < 1) {
  //       slideIndex = slidesItems.length;
  //     } else if (n > slidesItems.length) {
  //       slideIndex = 1;
  //     }
  //     for (let i = 0; i < slidesItems.length; i++) {
  //       slidesItems[i].style.display = 'none';
  //     }
  //     for (let i = 0; i < dots.length; i++) {
  //       dots[i].classList.remove('slider__toggle--active');
  //     }
  //     slidesItems[slideIndex - 1].style.display = 'block';
  //     dots[slideIndex - 1].classList.add('slider__toggle--active');
  //   }

  //   function currentSlide(n) {
  //     showSlides(slideIndex = n)
  //   }

  //   dotsArea.onclick = function (e) {
  //     for (let i = 0; i < dots.length + 1; i++) {
  //       if (e.target.classList.contains('slider__toggle') && e.target == dots[i - 1]) {
  //         currentSlide(i);
  //       }
  //     }
  //   }


  const dotsArea = document.getElementById('card-slider');
  const cardList = document.querySelector('.card__second-list').children;
  let currentSlide = 2;


  function toggleSlider(evt) {
    evt.preventDefault();


    if (evt.target.tagName != 'BUTTON') {
      return;
    }

    const sliderId = +evt.target.dataset.sliderButton;

    if (currentSlide == sliderId) {
      return;
    }
    cardList[currentSlide - 2].classList.add('display-slider-none');
    cardList[sliderId - 2].classList.remove('display-slider-none');

    console.log(currentSlide)
    console.log(sliderId)


    currentSlide = sliderId;
  }

  dotsArea.addEventListener('click', toggleSlider);
})();
