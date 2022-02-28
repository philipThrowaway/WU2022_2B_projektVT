const burger = document.querySelector(".burger")
const one = document.querySelector(".one")
const two = document.querySelector(".two")
const nav =  document.querySelector(".nav-links")
const test = document.querySelector("nav")

function toggleMenu() {
    //nav.classList.toggle("nav-active")
    one.classList.toggle("burger-active")
    two.classList.toggle("burger-active")
    burger.classList.toggle("burger-active")
    nav.classList.toggle("burger-active")
    test.classList.toggle("burger-active")
}
burger.addEventListener("click", toggleMenu)