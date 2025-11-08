// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
});

// Newsletter Form
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const messageElement = document.getElementById('newsletter-message');
    const emailInput = this.querySelector('input[type="email"]');
    const email = emailInput.value;
    
    // Simple validation
    if (email && email.includes('@')) {
        messageElement.textContent = 'Thank you for subscribing! Check your inbox soon.';
        messageElement.style.color = '#4ade80';
        emailInput.value = '';
        
        // You can add actual newsletter integration here
        // For example, send to a backend API or service like Mailchimp, ConvertKit, etc.
        
        setTimeout(() => {
            messageElement.textContent = '';
        }, 5000);
    } else {
        messageElement.textContent = 'Please enter a valid email address.';
        messageElement.style.color = '#f87171';
    }
});

// Smooth scroll for anchor links (if you add any)
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

// Add scroll-based animations
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

// Observe cards and images for animation
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.learn-card, .peek-card, .pricing-card, .faq-item');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Animate book images on load
    const bookImages = document.querySelectorAll('.book-cover, .book-showcase, .pricing-book-image');
    bookImages.forEach((img, index) => {
        img.style.opacity = '0';
        img.style.transform = 'scale(0.95)';
        
        // Use a short delay to ensure image is loaded
        setTimeout(() => {
            img.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            img.style.opacity = '1';
            img.style.transform = 'scale(1)';
        }, 200 + (index * 100));
    });
});
