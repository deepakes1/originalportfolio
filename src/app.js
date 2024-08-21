let homebutton = document.getElementById("homebutton");
let homesection = document.getElementById("homesection");

let animation = document.getElementById("animation");

let resumebutton = document.getElementById("resumebutton");
let resumesection = document.getElementById("resumesection");

let projectbutton = document.getElementById("projectbutton");
let projectsection = document.getElementById("projectsection");

let certificatebut = document.getElementById("certificatebut");
let certificatesection = document.getElementById("certificatesection");

let aboutbut = document.getElementById("aboutbut");
let contactsection = document.getElementById("contactsection");


const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const card4 = document.getElementById('card4');
const card5 = document.getElementById('card5');

const card7 = document.getElementById('card7');
const card_1 = document.getElementById('card-1');
const card_3 = document.getElementById('card-3');


card1.addEventListener('click', () => {
  window.open('https://js-mini-project-inw5.vercel.app/');
});

card2.addEventListener('click', () => {
  window.open('https://chatgpt-design-tailwind-xk8p.vercel.app/');
});

card3.addEventListener('click', () => {
  window.open('https://js-mini-project-navy.vercel.app/');
});

card4.addEventListener('click', () => {
  window.open('https://movie-searcher-api.vercel.app/');
});

card5.addEventListener('click', () => {
  window.open('https://react-user-generator-coral.vercel.app/');
});

card7.addEventListener('click', () => {
  window.open('https://storage-application.vercel.app/');
});

card_1.addEventListener('click', () => {
  window.open('https://netflix-clone-design.vercel.app/');
});

card_3.addEventListener('click', () => {
  window.open('https://todo-firebase-orcin.vercel.app/');
});



homebutton.addEventListener("click", ()=> {
    homesection.classList.remove("hidden")
    animation.classList.add("hidden")
    resumesection.classList.add("hidden")
    projectsection.classList.add("hidden")
    certificatesection.classList.add("hidden")
    contactsection.classList.add("hidden")
})
resumebutton.addEventListener("click", ()=> {
    homesection.classList.add("hidden")
    animation.classList.add("hidden")
    resumesection.classList.remove("hidden")
    projectsection.classList.add("hidden")
    certificatesection.classList.add("hidden")
    contactsection.classList.add("hidden")
})

projectbutton.addEventListener("click", ()=> {
    homesection.classList.add("hidden")
    animation.classList.add("hidden")
    resumesection.classList.add("hidden")
    projectsection.classList.remove("hidden")
    certificatesection.classList.add("hidden")
    contactsection.classList.add("hidden")
})


certificatebut.addEventListener("click", ()=> {
    homesection.classList.add("hidden")
    animation.classList.add("hidden")
    resumesection.classList.add("hidden")
    projectsection.classList.add("hidden")
    certificatesection.classList.remove("hidden")
    contactsection.classList.add("hidden")
})


aboutbut.addEventListener("click", ()=> {
    homesection.classList.add("hidden")
    animation.classList.add("hidden")
    resumesection.classList.add("hidden")
    projectsection.classList.add("hidden")
    certificatesection.classList.add("hidden")
    contactsection.classList.remove("hidden")
})





