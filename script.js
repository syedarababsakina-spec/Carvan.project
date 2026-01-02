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

// khadija section
document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality
    const filterTabs = document.querySelectorAll('.filter-tab');
    const allSections = document.querySelectorAll('.container-fluid');
    
    // Set first tab as active
    if (filterTabs.length > 0) {
        filterTabs[0].classList.add('active');
    }
    
    // Add click event to each tab
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const filterText = this.textContent.trim();
            
            // Update active tab
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Filter sections
            filterSections(filterText);
        });
    });
    
    function filterSections(brand) {
        allSections.forEach(section => {
            const sectionBrand = section.querySelector('h1')?.textContent?.trim();
            
            if (brand === 'BMW' || brand === '#' || !sectionBrand) {
                // Show all if "BMW" is clicked or no brand specified
                section.style.display = 'block';
            } else if (sectionBrand === brand) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }
    
    // Video play on hover functionality
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const video = card.querySelector('video');
        
        card.addEventListener('mouseenter', function() {
            if (video) {
                video.play();
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        });
    });
    
    // Smooth scroll for page
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Apply initial animation styles
    allSections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        section.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(section);
    });
});
// khadija section closse 