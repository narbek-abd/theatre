"use strict";

var swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
var hamburger = document.querySelector('.hamburger');
var navbar = document.querySelector('.navbar');
var havbarWrapper = document.querySelector('.navbar-wrapper');
hamburger.addEventListener("click", toggleNav);
havbarWrapper.addEventListener("click", toggleNav);

function toggleNav(e) {
  if (e.target.closest('.navbar') && !e.target.closest('.navbar-close')) return;
  hamburger.classList.toggle("crossed");
  navbar.classList.toggle("opened");
  havbarWrapper.classList.toggle('active');
}

var da = new DynamicAdapt("max");
da.init();