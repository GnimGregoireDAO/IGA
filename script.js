// Script principal pour le site IGA avec loader et nouvelles animations

document.addEventListener('DOMContentLoaded', function() {
    // Gestion du loader au démarrage
    initPageLoader();

    // Navigation smooth scroll
    initSmoothScroll();

    // Animation des statistiques au scroll
    initStatsAnimation();

    // Animation des cartes au scroll
    initCardsAnimation();

    // Gestion du formulaire de contact
    initContactForm();

    // Menu mobile (si nécessaire)
    initMobileMenu();

    // Header scroll effect
    initHeaderScrollEffect();
});

// Gestion du loader avec animation fluide
function initPageLoader() {
    const loader = document.getElementById('page-loader');
    const loaderBar = document.querySelector('.loader-bar');

    if (loader) {
        // Simulation du chargement avec progression
        let progress = 0;
        const progressInterval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(progressInterval);

                // Attendre un peu avant de masquer le loader
                setTimeout(() => {
                    loader.classList.add('fade-out');

                    // Supprimer le loader du DOM après l'animation
                    setTimeout(() => {
                        loader.remove();
                        // Déclencher les animations d'entrée
                        document.body.classList.add('loaded');
                    }, 500);
                }, 800);
            }

            if (loaderBar) {
                loaderBar.style.width = `${progress}%`;
            }
        }, 100);
    }
}

// Effet de scroll sur le header
function initHeaderScrollEffect() {
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Gestion de la navigation active
        updateActiveNavigation();

        lastScroll = currentScroll;
    });
}

// Mise à jour de la navigation active
function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const scrollPosition = window.scrollY + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Navigation avec défilement fluide
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Fermer le menu mobile si ouvert
                const nav = document.querySelector('nav');
                if (nav.classList.contains('mobile-open')) {
                    nav.classList.remove('mobile-open');
                }
            }
        });
    });
}

// Animation des statistiques avec compteur animé
function initStatsAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number, .big-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumber(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => observer.observe(stat));
}

// Animation d'incrémentation des nombres avec effet plus fluide
function animateNumber(element) {
    const text = element.textContent;
    const finalNumber = parseInt(text.replace(/[^\d]/g, ''));
    const suffix = text.replace(/[\d]/g, '');
    const duration = 2000;
    const steps = 60;
    const increment = finalNumber / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
        step++;
        current = Math.min(finalNumber, Math.floor(increment * step));

        element.textContent = current + suffix;

        if (step >= steps) {
            element.textContent = finalNumber + suffix;
            clearInterval(timer);
        }
    }, duration / steps);
}

// Animation d'apparition des cartes avec effet stagger
function initCardsAnimation() {
    const cards = document.querySelectorAll('.service-card, .project-card, .team-member, .partner-logo');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150); // Délai échelonné plus long pour un effet plus visible
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(card);
    });
}

// Gestion du formulaire de contact améliorée
function initContactForm() {
    const form = document.querySelector('#contact-form');

    if (form) {
        // Animation des champs au focus
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });

            input.addEventListener('blur', function() {
                if (!this.value) {
                    this.parentElement.classList.remove('focused');
                }
            });
        });

        // Validation et soumission
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Animation du bouton de soumission
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            submitBtn.innerHTML = '<span>Envoi en cours...</span>';
            submitBtn.disabled = true;

            // Validation
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            let firstInvalidField = null;

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#ef4444';
                    field.style.boxShadow = '0 0 0 4px rgba(239, 68, 68, 0.1)';

                    if (!firstInvalidField) {
                        firstInvalidField = field;
                    }
                } else {
                    field.style.borderColor = '#e2e8f0';
                    field.style.boxShadow = '';
                }
            });

            // Validation email
            const emailField = form.querySelector('[type="email"]');
            if (emailField && emailField.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailField.value)) {
                    isValid = false;
                    emailField.style.borderColor = '#ef4444';
                    emailField.style.boxShadow = '0 0 0 4px rgba(239, 68, 68, 0.1)';
                    if (!firstInvalidField) {
                        firstInvalidField = emailField;
                    }
                }
            }

            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;

                if (isValid) {
                    showNotification('Votre demande a été envoyée avec succès ! Nous vous répondrons dans les plus brefs délais.', 'success');
                    form.reset();

                    // Réinitialiser les styles des champs
                    inputs.forEach(input => {
                        input.style.borderColor = '';
                        input.style.boxShadow = '';
                        input.parentElement.classList.remove('focused');
                    });
                } else {
                    showNotification('Veuillez remplir tous les champs obligatoires correctement.', 'error');
                    if (firstInvalidField) {
                        firstInvalidField.focus();
                    }
                }
            }, 1500); // Simulation d'envoi
        });
    }
}

// Affichage des notifications avec design amélioré
function showNotification(message, type = 'info') {
    // Supprimer les notifications existantes
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notif => notif.remove());

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;

    const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';

    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-icon">${icon}</div>
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;

    // Styles pour la notification
    const baseStyles = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        z-index: 10000;
        max-width: 400px;
        font-family: 'Poppins', sans-serif;
        animation: slideInNotif 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.2);
    `;

    const typeStyles = {
        success: 'background: linear-gradient(135deg, #10b981, #34d399); color: white;',
        error: 'background: linear-gradient(135deg, #ef4444, #f87171); color: white;',
        info: 'background: linear-gradient(135deg, #1e4fd6, #3b82f6); color: white;'
    };

    notification.style.cssText = baseStyles + typeStyles[type];

    // Ajouter les styles pour l'animation
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInNotif {
                from { 
                    transform: translateX(100%); 
                    opacity: 0; 
                }
                to { 
                    transform: translateX(0); 
                    opacity: 1; 
                }
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 1rem;
            }
            .notification-icon {
                width: 24px;
                height: 24px;
                border-radius: 50%;
                background: rgba(255,255,255,0.2);
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                font-size: 0.9rem;
            }
            .notification-message {
                flex: 1;
                line-height: 1.5;
                font-weight: 500;
            }
            .notification-close {
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: background 0.2s ease;
            }
            .notification-close:hover {
                background: rgba(255,255,255,0.2);
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    // Auto-suppression après 5 secondes
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideInNotif 0.4s cubic-bezier(0.4, 0, 0.2, 1) reverse';
            setTimeout(() => notification.remove(), 400);
        }
    }, 5000);
}

// Menu mobile amélioré
function initMobileMenu() {
    const nav = document.querySelector('nav');

    // Détection du mobile
    if (window.innerWidth <= 768) {
        nav.classList.add('mobile-nav');

        // Créer le bouton hamburger si nécessaire
        if (!document.querySelector('.mobile-menu-btn')) {
            const menuBtn = document.createElement('button');
            menuBtn.className = 'mobile-menu-btn';
            menuBtn.innerHTML = '<span></span><span></span><span></span>';
            menuBtn.addEventListener('click', () => {
                nav.classList.toggle('mobile-open');
                menuBtn.classList.toggle('active');
            });

            nav.parentElement.insertBefore(menuBtn, nav);
        }
    }

    // Gestion du redimensionnement
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            nav.classList.add('mobile-nav');
        } else {
            nav.classList.remove('mobile-nav', 'mobile-open');
            const menuBtn = document.querySelector('.mobile-menu-btn');
            if (menuBtn) {
                menuBtn.classList.remove('active');
            }
        }
    });
}

// Effet parallaxe léger sur le hero
function initParallaxEffect() {
    const hero = document.querySelector('#hero');

    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Initialisation des effets au chargement complet
window.addEventListener('load', function() {
    // Activer les effets avancés après le chargement
    initParallaxEffect();

    // Preloader les images
    const images = document.querySelectorAll('img[src]');
    images.forEach(img => {
        if (!img.complete) {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
        } else {
            img.classList.add('loaded');
        }
    });
});

// Gestion des erreurs
window.addEventListener('error', function(e) {
    console.warn('Erreur détectée:', e.error);
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log(`Site chargé en ${Math.round(perfData.loadEventEnd - perfData.navigationStart)}ms`);
        }, 0);
    });
}
