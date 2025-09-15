// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link, .footer-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Header background change on scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(26, 26, 46, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'linear-gradient(135deg, #1a1a2e, #16213e)';
            header.style.backdropFilter = 'none';
        }
    });

    // Testimonial carousel functionality
    const testimonialDots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentTestimonial = 0;

    const testimonials = [
        {
            quote: "iii",
            author: "iii"
        },
        {
            quote: "M",
            author: "S"
        },
        {
            quote: "ii.",
            author: "jjj"
        }
    ];

    function updateTestimonial(index) {
        const quoteElement = document.querySelector('.testimonial-quote');
        const authorElement = document.querySelector('.testimonial-author');
        
        quoteElement.textContent = testimonials[index].quote;
        authorElement.textContent = testimonials[index].author;
        
        // Update dots
        testimonialDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    // Dot navigation
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentTestimonial = index;
            updateTestimonial(currentTestimonial);
        });
    });

    // Previous button
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            updateTestimonial(currentTestimonial);
        });
    }

    // Next button
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            updateTestimonial(currentTestimonial);
        });
    }

    // Auto-rotate testimonials
    setInterval(function() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateTestimonial(currentTestimonial);
    }, 5000);

     // Contact button functionality - now handled by direct link in HTML
     // No additional JavaScript needed as link is direct

    // Let's Talk button functionality
    const letsTalkBtn = document.querySelector('.btn-primary');
    if (letsTalkBtn && letsTalkBtn.textContent.includes("LET'S TALK")) {
        letsTalkBtn.addEventListener('click', function() {
            // You can add contact form modal or redirect to contact section
            alert('Let\'s Talk functionality - you can add a contact form or modal here!');
        });
    }

     // Download Resume button functionality
     const downloadBtn = document.querySelector('.btn-secondary');
     if (downloadBtn && downloadBtn.textContent.includes("Download Resume")) {
         downloadBtn.addEventListener('click', function() {
             // Create a link element to download the resume
             const link = document.createElement('a');
             link.href = 'Resume.pdf';
             link.download = 'Resume.pdf';
             document.body.appendChild(link);
             link.click();
             document.body.removeChild(link);
         });
     }

     // Project buttons functionality - now handled by direct links in HTML
     // No additional JavaScript needed as links are direct

    // View All Projects button
    const viewAllBtn = document.querySelector('.projects-cta .btn-primary');
    if (viewAllBtn && viewAllBtn.textContent.includes("View All Projects")) {
        viewAllBtn.addEventListener('click', function() {
            alert('View All Projects functionality - you can add a projects page or modal here!');
        });
    }

    // CTA circle functionality
    const ctaCircle = document.querySelector('.cta-circle');
    if (ctaCircle) {
        ctaCircle.addEventListener('click', function() {
            // Scroll to top or show contact form
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Skill cards hover effect enhancement
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        });
    });

    // Project cards hover effect enhancement
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        });
    });

     // Social media links functionality
     const socialIcons = document.querySelectorAll('.social-icon');
     
     socialIcons.forEach(icon => {
         icon.addEventListener('click', function(e) {
             const iClass = this.querySelector('i').className.toLowerCase();
             
             if(iClass.includes('envelope')) {
                 e.preventDefault();
                 // Try multiple methods to ensure mailto works
                 const mailtoLink = 'mailto:user@gmail.com?subject=Portfolio Contact&body=Hello,';
                 window.open(mailtoLink, '_self');
             }
             // LinkedIn and GitHub links work directly from HTML
         });
     });


    // Mobile menu toggle
    function createMobileMenu() {
        const header = document.querySelector('.header .container');
        const navMenu = document.querySelector('.nav-menu');
        
        if (window.innerWidth <= 768) {
            // Create mobile menu button
            if (!document.querySelector('.mobile-menu-btn')) {
                const mobileBtn = document.createElement('button');
                mobileBtn.className = 'mobile-menu-btn';
                mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
                
                header.appendChild(mobileBtn);
                
                // Toggle mobile menu
                mobileBtn.addEventListener('click', function() {
                    navMenu.classList.toggle('active');
                    const icon = this.querySelector('i');
                    icon.classList.toggle('fa-bars');
                    icon.classList.toggle('fa-times');
                });
                
                // Close menu when clicking on nav links
                const navLinks = document.querySelectorAll('.nav-link');
                navLinks.forEach(link => {
                    link.addEventListener('click', function() {
                        navMenu.classList.remove('active');
                        const icon = mobileBtn.querySelector('i');
                        icon.classList.add('fa-bars');
                        icon.classList.remove('fa-times');
                    });
                });
            }
        } else {
            // Remove mobile menu button on desktop
            const mobileBtn = document.querySelector('.mobile-menu-btn');
            if (mobileBtn) {
                mobileBtn.remove();
            }
            navMenu.classList.remove('active');
        }
    }

    // Initialize mobile menu
    createMobileMenu();
    window.addEventListener('resize', createMobileMenu);

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.skill-card, .project-card, .accomplishment-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    console.log('Portfolio website loaded successfully!');
});
