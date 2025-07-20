// About Page Specific JavaScript
if (document.querySelector('.about-hero')) {
    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dotsContainer = document.querySelector('.testimonial-dots');
    let currentTestimonial = 0;
    
    // Create dots
    testimonials.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            showTestimonial(index);
        });
        dotsContainer.appendChild(dot);
    });
    
    // Navigation buttons
    document.querySelector('.prev-testimonial').addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
    });
    
    document.querySelector('.next-testimonial').addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    });
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        testimonials[index].classList.add('active');
        
        const dots = document.querySelectorAll('.dot');
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        
        currentTestimonial = index;
    }
    
    // Auto-rotate testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);
    
    // Animate stats when they come into view
    const statNumbers = document.querySelectorAll('.stat-number');
    const impactSection = document.querySelector('.impact-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statNumbers.forEach(stat => {
                    const target = +stat.getAttribute('data-count');
                    const duration = 2000;
                    const step = target / (duration / 16);
                    let current = 0;
                    
                    const updateCount = () => {
                        current += step;
                        if (current < target) {
                            stat.textContent = Math.floor(current);
                            requestAnimationFrame(updateCount);
                        } else {
                            stat.textContent = target;
                        }
                    };
                    
                    updateCount();
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(impactSection);
    
    // Scroll to content when clicking scroll down
    document.querySelector('.scroll-down').addEventListener('click', () => {
        window.scrollTo({
            top: document.querySelector('.our-story').offsetTop - 80,
            behavior: 'smooth'
        });
    });
}