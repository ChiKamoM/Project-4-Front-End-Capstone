//Slideshow gallery
const slides = document.querySelectorAll(".images");
let slideIndex = 0;
const prevBttn = document.querySelector(".prev");
const nextBttn = document.querySelector(".next");
const maxIndex = slides.length - 1;


start();

function start() {
   slides[slideIndex].classList.remove("hidden") 
   console.log(slideIndex)
}

function showSlide(index) {
     slides[slideIndex].classList.remove("hidden")
} 

function prevSlide() {
   slides[slideIndex].classList.add("hidden");
   slideIndex--;
   if (slideIndex < 0) {
     slideIndex = 2
   }
   showSlide(slideIndex) 
}
function nextSlide() { 
   slides[slideIndex].classList.add("hidden");
   slideIndex ++;
   if (slideIndex > maxIndex) {
     slideIndex = 0
   }
   showSlide(slideIndex)
}

prevBttn.addEventListener("click", ()=>{
     prevSlide();
})
nextBttn.addEventListener("click", ()=>{
     nextSlide();
})