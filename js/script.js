console.log("Cześć Wszystkim! Poniżej moja praca domowa z M04 BEM");

let button1 = document.querySelector(".js-button1") 
let button2 = document.querySelector(".js-button2") 
let button3 = document.querySelector(".js-button3");
let logofirmy = document.querySelector(".js-companyLogo");

button1.addEventListener("click", () => {
    logofirmy.remove();
});

let body = document.querySelector(".body")
let themeName2 = document.querySelector(".js-themeName2")
button2.addEventListener("click", () => {
    body.classList.toggle("js-body--dark");
    themeName2.innerText = body.classList.contains("js-body--dark") ? "jasny" : "ciemny"
}); 

let naglowek = document.querySelector(".sectionHome__header");
button3.addEventListener("click", () => {
    naglowek.classList.toggle("js-displayNone");
});
