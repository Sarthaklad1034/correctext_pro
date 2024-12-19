document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap carousel
    var myCarousel = new bootstrap.Carousel(document.querySelector('.carousel'), {
        interval: 3000,
        wrap: true
    });

    // Form submission
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Your message has been submitted!');
            this.reset();
        });
    }

    // Navbar scroll behavior
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-sm');
        } else {
            navbar.classList.remove('shadow-sm');
        }
    });
});
