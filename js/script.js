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

//Make the numbers count
const counters = document.querySelectorAll(".num");

const startCounter = (counter) => {
    const target = parseFloat(counter.getAttribute("data-target"));
    const isDecimal = target % 1 !== 0;

    let count = 0;
    const speed = target / 100;

    const updateCount = () => {
    count += speed;

    if (count < target) {
        counter.innerText = isDecimal
            ? count.toFixed(1)
            : Math.floor(count);

        requestAnimationFrame(updateCount);

    } else {

        const symbol = counter.dataset.symbol || "+";

        counter.innerText = isDecimal
            ? target.toFixed(1)
            : target + symbol;
    }
};

    updateCount();
};

// Trigger animation when section appears
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {

            counters.forEach(counter => {

                if (!counter.classList.contains("counted")) {
                    startCounter(counter);
                    counter.classList.add("counted");
                }

            });

        }

    });
}, {
    threshold: 0.5
});

observer.observe(document.querySelector(".statistics-wrapper"));