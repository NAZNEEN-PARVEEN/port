

 
const typingElement = document.getElementById("typing");
const words = ["developer.", "coder.", "programmer."];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const fullText = currentWord;

  if (isDeleting) {
    typingElement.textContent = fullText.substring(0, charIndex--);
  } else {
    typingElement.textContent = fullText.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === fullText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000); // Pause before deleting
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? 100 : 150);
}

typeEffect();





// Navigation - Show only clicked section
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll(".section");



navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);

    sections.forEach(section => {
      section.style.display = "none";
    });

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.style.display = targetId === "home" ? "flex" : "block";
    }
  });
});
  






