document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('cursor');
    const ctaButton = document.getElementById('cta-button');
    const contactForm = document.getElementById('contact-form');

    // Custom cursor
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // CTA button animation
    ctaButton.addEventListener('mouseover', () => {
        ctaButton.style.transform = 'scale(1.1)';
    });

    ctaButton.addEventListener('mouseout', () => {
        ctaButton.style.transform = 'scale(1)';
    });

    // Form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });

    // Parallax effect
  
    });

    document.addEventListener('DOMContentLoaded', () => {
        const header = document.querySelector('.header');
        const navLinks = document.querySelectorAll('.nav-links a');
    
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.style.transform = 'translateY(-3px)';
            });
            link.addEventListener('mouseleave', () => {
                link.style.transform = 'translateY(0)';
            });
        });
    });




    document.addEventListener('DOMContentLoaded', () => {
        const background = document.querySelector('.triangle-background');
        const numberOfTriangles = 50; // Adjust this number to add more or fewer triangles
    
        for (let i = 0; i < numberOfTriangles; i++) {
            const triangle = document.createElement('div');
            triangle.classList.add('floating-triangle');
            triangle.style.top = `${Math.random() * 100}%`;
            triangle.style.left = `${Math.random() * 100}%`;
            triangle.style.animationDuration = `${15 + Math.random() * 15}s`; // Random duration between 15-30s
            triangle.style.animationDelay = `${Math.random() * -30}s`; // Random start time
            background.appendChild(triangle);
        }
    });