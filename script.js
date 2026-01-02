let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dots span');
let current = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');
    current = index;
}

function nextSlide() {
    showSlide((current + 1) % slides.length);
}

function prevSlide() {
    showSlide((current - 1 + slides.length) % slides.length);
}

function goSlide(index) {
    showSlide(index);
}

/* Auto Slide */
setInterval(nextSlide, 7000);

/* Mobile Menu */
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('show');
}

/* Init */
showSlide(0);
