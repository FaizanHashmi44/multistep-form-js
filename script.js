$(document).ready(function(){

$('')









});

const slidePage = document.querySelector(".slidepage");
const firstNextBtn = document.querySelector(".nextBtn");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnForth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText =document.querySelectorAll(".step .p");
const progresscheck =document.querySelectorAll(".step .check");
const bullet  =document.querySelectorAll(".step .bullet");
let max = 4;
let current = 1;

firstNextBtn.addEventListener("click", function(){
    slidePage.style.marginLeft="-25%";
    bullet[current -1].classList.add("active");
    progresscheck[current -1].classList.add("active");
    current +=1;
});
nextBtnSec.addEventListener("click", function(){
    slidePage.style.marginLeft="-50%";
    bullet[current -1].classList.add("active");
    progresscheck[current -1].classList.add("active");
    current +=1;
});
nextBtnThird.addEventListener("click", function(){
    slidePage.style.marginLeft="-75%";
    bullet[current -1].classList.add("active");
    progresscheck[current -1].classList.add("active");
    current +=1;
});

submitBtn.addEventListener("click", function(){
    bullet[current -1].classList.add("active");
    progresscheck[current -1].classList.add("active");
    current +=1;
    setTimeout(function(){
        alert("Your Signup form is Submitted");
    }, 800);
});


prevBtnSec.addEventListener("click", function(){
    slidePage.style.marginLeft="0%";
});
prevBtnThird.addEventListener("click", function(){
    slidePage.style.marginLeft="-25%";
});
prevBtnForth.addEventListener("click", function(){
    slidePage.style.marginLeft="-50%";
});