const hamburger =  document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const clicked = document.querySelector(".heading");

hamburger.addEventListener("click" , () => {
   navMenu.classList.toggle("active");
 
})

document.querySelectorAll(".nav-link").forEach(n => n. 
  addEventListener("click", () => {
    navMenu.classList.remove("active")
    
  }))
