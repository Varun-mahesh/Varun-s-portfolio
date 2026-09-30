/* ===============================
   TYPING EFFECT
================================ */

const typingElement = document.getElementById("typing");

const words = [
    "Cloud Computing Enthusiast",
    "Web Developer",
    "B.Tech IT Student",
    "AWS Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typingEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typingEffect,
        deleting ? 50 : 90
    );
}

typingEffect();



/* ===============================
   MOBILE MENU
================================ */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});


/* Close menu when clicking link */

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

});



/* ===============================
   ACTIVE NAVIGATION
================================ */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar nav a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});



/* ===============================
   SCROLL TO TOP
================================ */

const scrollTop = document.getElementById("scrollTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTop.classList.add("show");

    } else {

        scrollTop.classList.remove("show");

    }

});


scrollTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});



/* ===============================
   CONTACT FORM
================================ */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    alert(
        "Thank you, " +
        name +
        "! Your message has been received."
    );

    contactForm.reset();

});



/* ===============================
   SCROLL REVEAL
================================ */

const revealElements =
    document.querySelectorAll(
        ".section-title, .about-container, .timeline-item, .education-card, .skill-card, .project-card, .certificate-card, .achievement-grid > div, .contact-container"
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

});


function revealOnScroll() {

    const windowHeight =
        window.innerHeight;

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {

            element.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();