// ==========================
// Typing Animation
// ==========================

const words = [
  "VLSI Design Engineer",
  "Embedded Systems Developer",
  "Verilog HDL Programmer",
  "MATLAB Enthusiast",
  "FPGA Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent = currentWord.substring(0, charIndex++);
    } else {

        typingElement.textContent = currentWord.substring(0, charIndex--);
    }

    if (!deleting && charIndex === currentWord.length + 1) {

        deleting = true;

        setTimeout(typeEffect, 1500);

        return;
    }

    if (deleting && charIndex === 0) {

        deleting = false;

        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();


// ==========================
// Mobile Menu
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("show");

});

}


// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


// ==========================
// Navbar Shadow
// ==========================

window.addEventListener("scroll",()=>{

const navbar=document.querySelector(".navbar");

if(window.scrollY>80){

navbar.classList.add("sticky");

}

else{

navbar.classList.remove("sticky");

}

});
// ==========================
// Scroll Reveal Animation
// ==========================

const reveals=document.querySelectorAll("section");

function revealSection(){

reveals.forEach(section=>{

const top=section.getBoundingClientRect().top;

const visible=150;

if(top<window.innerHeight-visible){

section.classList.add("active");

}

});

}

window.addEventListener("scroll",revealSection);

revealSection();


// ==========================
// Scroll Progress Bar
// ==========================

const progress=document.createElement("div");

progress.id="progress-bar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const totalHeight=document.documentElement.scrollHeight-window.innerHeight;

const progressHeight=(window.pageYOffset/totalHeight)*100;

progress.style.width=progressHeight+"%";

});


// ==========================
// Active Navigation
// ==========================

const sections=document.querySelectorAll("section");

const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// ==========================
// Button Hover Animation
// ==========================

const buttons=document.querySelectorAll(".btn");

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="scale(1.05)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="scale(1)";

});

});


// ==========================
// Console Message
// ==========================

console.log("%cWelcome to Gokulan GT Portfolio","color:#00bfff;font-size:20px;font-weight:bold;");
console.log("Designed by Gokulan GT");
