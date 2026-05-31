// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

});

// pop ofcanvas
document.querySelectorAll('#mobileMenu .nav-link')
.forEach(link => {

    link.addEventListener('click', () => {

        const offcanvasElement =
            document.getElementById('mobileMenu');

        const offcanvas =
            bootstrap.Offcanvas.getInstance(offcanvasElement);

        offcanvas.hide();
    });

});