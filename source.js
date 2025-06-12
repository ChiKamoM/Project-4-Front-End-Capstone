//Slideshow gallery
 const slides = document.querySelectorAll(".images");
if (slides.length > 0) {

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
}



// Menu modal
var pizzas = document.querySelectorAll(".menu-item")
if (pizzas.length>0) {
   var pizzaIngredients = document.querySelectorAll(".pizza-modal")

   pizzas.forEach((pizza, index) => {
      pizza.addEventListener("click", () => {
            let current = index;
            pizzaIngredients[index].classList.toggle("hidden")
      })
});

}


   //Form
const form = document.getElementById("form")
if (form) {
   let modal = document.querySelector(".modal-container")
   let nameField = document.querySelector(".name")
   let surnameField = document.querySelector(".surname")
   let telNumberField = document.querySelector(".phone-number")
   let pizzaField = document.querySelector(".selected")  
   let submit = document.querySelector("#submit")
   let validate = document.querySelector("#validate")
   
   validate.addEventListener("click", ()=>{
      let pizzaChoice = document.querySelector("#pizzaChoice")
      let telNumber = document.querySelector("#first-name")
      let surname = document.querySelector("#surname")
      let fName = document.querySelector("#first-name")
      
      fName = fName.value
      surname = surname.value
      telNumber = telNumber.value
      pizzaChoice = pizzaChoice.value
      
      console.log(fName, surname, telNumber, pizzaChoice)
      if (form.checkValidity() && pizzaChoice != "Choose here") {
         function inputChoices(field, input) {
            field.innerText = input
         }
         inputChoices(nameField, fName)
         inputChoices(surnameField, surname)
         inputChoices(telNumberField, telNumber)
         inputChoices(pizzaField, pizzaChoice)
         modal.classList.remove("hidden")
      } else {
         console.log("form invalid")
      }

   })
   
   
}
   




