document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Sticky Header
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
    
    // Animated Stats Counter
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsSection = document.querySelector('.about');
    
    const animateStats = () => {
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
    };
    
    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('about')) {
                    animateStats();
                }
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1 });
    
    // Observe sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Form Submission
    const connectionForm = document.getElementById('connectionForm');
    if (connectionForm) {
        connectionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would normally send the form data to a server
            alert('Thank you for your request! We will contact you shortly.');
            this.reset();
        });
    }
    
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Location Pins Animation
    const locationPins = document.querySelectorAll('.location-pin');
    locationPins.forEach(pin => {
        pin.addEventListener('mouseenter', function() {
            this.style.transform = 'translate(-50%, -50%) scale(1.3)';
            this.querySelector('::after').style.opacity = '1';
        });
        
        pin.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(-50%, -50%) scale(1)';
            this.querySelector('::after').style.opacity = '0';
        });
    });
});


// contact us 

// Contact Page Specific JavaScript
if (document.querySelector('.contact-section')) {
    // Initialize Google Map
    function initMap() {
        // This function would be replaced with your actual Google Maps API code
        console.log('Map would be initialized here');
    }
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
            
            // Close other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
    
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form validation
            const name = this.querySelector('#name').value.trim();
            const email = this.querySelector('#email').value.trim();
            const phone = this.querySelector('#phone').value.trim();
            
            if (!name || !email || !phone) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Here you would normally send the form data to a server
            alert('Thank you for your message! We will contact you shortly.');
            this.reset();
        });
    }
    
    // Load Google Maps API
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    
    window.initMap = initMap;
}


// about us 

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