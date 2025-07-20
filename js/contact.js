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