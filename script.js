document.addEventListener("DOMContentLoaded", () => {
    console.log("Website Loaded");
});

// Select all slide containers
const slides = document.querySelectorAll(".slide-container");
let currentSlide = 0;

// Function to show slides automatically
function showSlides() {
    // Remove 'active' class from all slides
    slides.forEach((slide) => {
        slide.classList.remove("active");
        slide.style.left = "100%"; // Reset position offscreen
    });

    // Add 'active' class to the current slide
    slides[currentSlide].classList.add("active");
    slides[currentSlide].style.left = "0"; // Bring into view

    // Move to the next slide, loop back to the first
    currentSlide = (currentSlide + 1) % slides.length;
}

// Initial display
showSlides();

// Change slides every 3 seconds
setInterval(showSlides, 3000);

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Your message has been submitted!');
    this.reset();
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    // Toggle navigation
    hamburger.addEventListener('click', () => {
        // Toggle navigation menu
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    // Close menu when clicking on a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
});