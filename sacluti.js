let navmenulinks = document.querySelectorAll('.navmenu a');

function navmenuScrollspy() {
  navmenulinks.forEach(navmenulink => {
    if (!navmenulink.hash) return;
    let section = document.querySelector(navmenulink.hash);
    if (!section) return;

    // Adjust the scroll position to consider a buffer (200px offset in this case)
    let position = window.scrollY + 200;

    if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
      // Remove the active class from all links
      document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
      // Add active class to the currently visible section's link
      navmenulink.classList.add('active');
    } else {
      // Remove active class when not in the current section
      navmenulink.classList.remove('active');
    }
  });
}

// Trigger the scrollspy when the page loads and on every scroll
window.addEventListener('load', navmenuScrollspy);
document.addEventListener('scroll', navmenuScrollspy);

//pang next sa projects cards

// === Project Navigation ===
const projectCards = document.querySelectorAll('.project-card');
let currentProject = 0;

function showProject(index) {
  projectCards.forEach((card, i) => {
    card.classList.remove('active-project', 'prev', 'next');
    if (i === index) {
      card.classList.add('active-project');
    } else if (i === (index - 1 + projectCards.length) % projectCards.length) {
      card.classList.add('prev');
    } else if (i === (index + 1) % projectCards.length) {
      card.classList.add('next');
    }
  });
}

document.getElementById('prevBtn').addEventListener('click', () => {
  currentProject = (currentProject - 1 + projectCards.length) % projectCards.length;
  showProject(currentProject);
});

document.getElementById('nextBtn').addEventListener('click', () => {
  currentProject = (currentProject + 1) % projectCards.length;
  showProject(currentProject);
});

// === Image Slideshow Per Card ===
projectCards.forEach((card) => {
  const images = card.querySelectorAll('.project-images img');
  let currentImageIndex = 0;

  function cycleImages() {
    // Remove active class from current image
    images[currentImageIndex].classList.remove('active');
    
    // Update index to next image
    currentImageIndex = (currentImageIndex + 1) % images.length;
    
    // Add active class to next image
    images[currentImageIndex].classList.add('active');
  }

  // Start the slideshow for this card
  if (images.length > 1) {
    setInterval(cycleImages, 3000);
  }
});

showProject(currentProject);

// Contact form handling
document.querySelector('#contact-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});

// Cyberpunk Interactive Effects
document.addEventListener('DOMContentLoaded', () => {
    // Glitch Text Effect
    const glitchText = () => {
        const letters = document.querySelectorAll('.gradient-text');
        letters.forEach(letter => {
            if (Math.random() < 0.1) {
                letter.style.animation = 'glitch 0.2s ease';
                letter.style.textShadow = `0 0 15px var(--neon-purple)`;
                setTimeout(() => {
                    letter.style.animation = '';
                    letter.style.textShadow = '';
                }, 200);
            }
        });
    };
    setInterval(glitchText, 2000);

    // Dynamic Button Glow
    const buttons = document.querySelectorAll('.send-button');
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / button.offsetWidth) * 100;
            const y = ((e.clientY - rect.top) / button.offsetHeight) * 100;
            button.style.setProperty('--x', `${x}%`);
            button.style.setProperty('--y', `${y}%`);
            button.style.background = `radial-gradient(circle at ${x}% ${y}%, var(--neon-purple), var(--cyber-purple))`;
        });

        button.addEventListener('mouseleave', () => {
            button.style.background = 'linear-gradient(45deg, var(--neon-purple), var(--cyber-purple))';
        });
    });

    // Circuit Line Animation
    const createCircuitLine = () => {
        const line = document.createElement('div');
        line.className = 'circuit-line';
        line.style.top = `${Math.random() * 100}%`;
        line.style.width = `${Math.random() * 200 + 50}px`;
        line.style.transform = `rotate(${Math.random() * 360}deg)`;
        line.style.background = `linear-gradient(90deg, 
            transparent,
            var(--neon-purple),
            var(--cyber-purple),
            transparent
        )`;
        document.body.appendChild(line);

        setTimeout(() => {
            line.remove();
        }, 2000);
    };
    setInterval(createCircuitLine, 3000);

    // Interactive Skill Categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        category.addEventListener('mouseenter', () => {
            const icon = category.querySelector('.skill-icon');
            icon.style.transform = 'scale(1.1)';
            category.style.borderColor = 'var(--neon-purple)';
            category.style.boxShadow = '0 0 20px var(--glow-purple)';
        });

        category.addEventListener('mouseleave', () => {
            const icon = category.querySelector('.skill-icon');
            icon.style.transform = 'scale(1)';
            category.style.borderColor = 'var(--secondary-purple)';
            category.style.boxShadow = '0 0 20px var(--deep-purple)';
        });
    });

    // Smooth Navigation
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

    // Active Navigation Highlight
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navmenu a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 300) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Form Interaction Effects
    const formControls = document.querySelectorAll('.form-control');
    formControls.forEach(control => {
        control.addEventListener('focus', () => {
            control.parentElement.style.boxShadow = '0 0 15px var(--glow-purple)';
            control.style.borderColor = 'var(--neon-purple)';
        });

        control.addEventListener('blur', () => {
            control.parentElement.style.boxShadow = 'none';
            control.style.borderColor = 'var(--secondary-purple)';
        });
    });

    // Contact Form Submit Effect
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const button = contactForm.querySelector('.send-button');
            button.innerHTML = '<i class="fas fa-check"></i> Sent!';
            button.style.background = 'linear-gradient(90deg, var(--neon-purple), var(--cyber-purple))';
            button.style.boxShadow = '0 0 20px var(--glow-purple)';
            setTimeout(() => {
                button.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
                button.style.background = '';
                button.style.boxShadow = '';
                contactForm.reset();
            }, 2000);
        });
    }

    // Tech Circle Dynamic Positioning
    const updateTechCircles = () => {
        const circles = document.querySelectorAll('.tech-circle');
        circles.forEach((circle, index) => {
            const angle = (Date.now() / 2000 + index * Math.PI) % (2 * Math.PI);
            const radius = 100;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            circle.style.transform = `translate(${x}px, ${y}px)`;
            circle.style.boxShadow = `0 0 20px var(--glow-purple)`;
            circle.style.borderColor = 'var(--neon-purple)';
        });
        requestAnimationFrame(updateTechCircles);
    };
    updateTechCircles();

    // Back Button Interactive Effects
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('mousemove', (e) => {
            const rect = backButton.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / backButton.offsetWidth) * 100;
            const y = ((e.clientY - rect.top) / backButton.offsetHeight) * 100;
            backButton.style.setProperty('--x', `${x}%`);
            backButton.style.setProperty('--y', `${y}%`);
        });

        backButton.addEventListener('mouseenter', () => {
            const glitchInterval = setInterval(() => {
                if (Math.random() < 0.1) {
                    backButton.style.transform = `translateX(${Math.random() * 2 - 1}px) translateY(${Math.random() * 2 - 1}px)`;
                    setTimeout(() => {
                        backButton.style.transform = 'translateX(-5px)';
                    }, 50);
                }
            }, 100);

            backButton.addEventListener('mouseleave', () => {
                clearInterval(glitchInterval);
                backButton.style.transform = '';
            }, { once: true });
        });
    }

    // Circuit Animation
    function createCircuitLine() {
        const line = document.createElement('div');
        line.className = 'circuit-line';
        document.querySelector('.circuit-animation').appendChild(line);

        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        const angle = Math.random() * Math.PI * 2;
        const length = 50 + Math.random() * 100;

        line.style.left = `${startX}px`;
        line.style.top = `${startY}px`;
        line.style.width = `${length}px`;
        line.style.transform = `rotate(${angle}rad)`;
        line.style.background = `linear-gradient(90deg,
            transparent,
            var(--neon-purple),
            var(--cyber-purple),
            transparent
        )`;

        setTimeout(() => line.remove(), 2000);
    }

    setInterval(createCircuitLine, 200);
});

// Initialize everything
window.addEventListener('load', () => {
  navmenuScrollspy();
  showProject(currentProject);
});

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add glitch effect to profile image
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        setInterval(() => {
            profileImage.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
            setTimeout(() => {
                profileImage.style.transform = 'translate(0, 0)';
            }, 100);
        }, 3000);
    }

    // Smooth scrolling for navigation
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

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            const formData = new FormData(this);
            console.log('Form submitted:', Object.fromEntries(formData));
            // Reset form after submission
            this.reset();
            // Show success message
            alert('Message sent successfully!');
        });
    }

    // Cyberpunk cursor effect
    const cursor = document.createElement('div');
    cursor.classList.add('cyber-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 0 40px var(--glow-purple)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Add typing effect to hero text
    const heroText = document.querySelector('.cyber-text');
    if (heroText) {
        const text = heroText.textContent;
        heroText.textContent = '';
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        typeWriter();
    }

    // Circuit animation
    const createCircuitLine = () => {
        const line = document.createElement('div');
        line.classList.add('circuit-line');
        line.style.top = Math.random() * 100 + '%';
        document.querySelector('.circuit-container').appendChild(line);

        line.addEventListener('animationend', () => {
            line.remove();
        });
    };

    setInterval(createCircuitLine, 3000);

    // Skill category hover effect
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            this.querySelector('i').style.transform = 'scale(1.2)';
        });

        category.addEventListener('mouseleave', function() {
            this.querySelector('i').style.transform = 'scale(1)';
        });
    });

    // Add parallax effect to background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        document.querySelector('.hero-background').style.transform = 
            `translateY(${scrolled * 0.5}px)`;
    });

    // Add glitch effect to buttons on hover
    document.querySelectorAll('.cyber-button').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.animation = 'glitch 0.3s infinite';
        });

        button.addEventListener('mouseleave', function() {
            this.style.animation = 'none';
        });
    });
});