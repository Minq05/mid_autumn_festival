// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initStars();
    initWishesStars();
    initParticles();
    initFloatingLanterns();
    initScrollEffects();
    initCTAButton();
    initTitleAnimation();
    initSubtitleAnimation();
    initFireworks();
    initCustomCursor();
});

// ===== STARS GENERATION (HERO) =====
function initStars() {
    const starsContainer = document.getElementById('starsContainer');
    const starCount = 150;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        star.style.animationDuration = `${2 + Math.random() * 3}s`;
        
        starsContainer.appendChild(star);
    }
}

// ===== STARS GENERATION (WISHES SECTION) =====
function initWishesStars() {
    const wishesStarsContainer = document.getElementById('wishesBgStars');
    const starCount = 100;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const size = Math.random() * 2.5 + 0.5;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        star.style.animationDuration = `${2 + Math.random() * 4}s`;
        
        wishesStarsContainer.appendChild(star);
    }
}

// ===== PARTICLES GENERATION =====
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 40;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        particle.style.animationDuration = `${8 + Math.random() * 6}s`;
        particlesContainer.appendChild(particle);
    }
}

// ===== FLOATING LANTERNS =====
function initFloatingLanterns() {
    const lanternsContainer = document.getElementById('floatingLanterns');
    const lanternCount = 8;
    
    for (let i = 0; i < lanternCount; i++) {
        const lantern = document.createElement('div');
        lantern.className = 'lantern';
        lantern.style.left = `${Math.random() * 100}%`;
        lantern.style.bottom = '-100px';
        lantern.style.animationDelay = `${i * 3}s`;
        lantern.style.animationDuration = `${15 + Math.random() * 8}s`;
        lanternsContainer.appendChild(lantern);
    }
}

// ===== TITLE CHARACTER ANIMATION =====
function initTitleAnimation() {
    const chars = document.querySelectorAll('.title-char');
    chars.forEach((char, index) => {
        char.style.animationDelay = `${index * 0.05}s`;
    });
}

// ===== SUBTITLE WORD ANIMATION =====
function initSubtitleAnimation() {
    const words = document.querySelectorAll('.subtitle-word');
    words.forEach((word, index) => {
        word.style.animationDelay = `${1 + index * 0.1}s`;
    });
}

// ===== FIREWORKS =====
function initFireworks() {
    const fireworksContainer = document.getElementById('fireworks');
    
    // Create fireworks periodically
    setInterval(() => {
        if (Math.random() > 0.7) { // 30% chance every interval
            createFirework(fireworksContainer);
        }
    }, 2000);
    
    // Initial fireworks
    setTimeout(() => createFirework(fireworksContainer), 1500);
    setTimeout(() => createFirework(fireworksContainer), 2000);
    setTimeout(() => createFirework(fireworksContainer), 2500);
}

function createFirework(container) {
    const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#95E1D3', '#F38181', '#AA96DA'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    const x = Math.random() * 80 + 10; // 10% to 90%
    const y = Math.random() * 50 + 10; // 10% to 60%
    
    const particleCount = 20 + Math.floor(Math.random() * 15);
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework';
        particle.style.left = `${x}%`;
        particle.style.top = `${y}%`;
        particle.style.background = color;
        particle.style.boxShadow = `0 0 10px ${color}`;
        
        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = 50 + Math.random() * 50;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);
        
        container.appendChild(particle);
        
        setTimeout(() => particle.remove(), 1500);
    }
}

// ===== SCROLL EFFECTS =====
function initScrollEffects() {
    const ctaButton = document.getElementById('ctaButton');
    const wishesSection = document.getElementById('wishes');
    
    ctaButton.addEventListener('click', () => {
        // Scroll to wishes section with offset for mobile
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            // On mobile, scroll to show the card properly
            const wishesCard = document.querySelector('.wishes-card');
            if (wishesCard) {
                const cardTop = wishesCard.getBoundingClientRect().top + window.pageYOffset;
                const offset = 20; // Small offset from top
                window.scrollTo({
                    top: cardTop - offset,
                    behavior: 'smooth'
                });
            }
        } else {
            wishesSection.scrollIntoView({ behavior: 'smooth' });
        }
        
        // Trigger extra fireworks on click
        const fireworksContainer = document.getElementById('fireworks');
        createFirework(fireworksContainer);
        setTimeout(() => createFirework(fireworksContainer), 200);
        setTimeout(() => createFirework(fireworksContainer), 400);
    });
    
    // Intersection Observer for fade-in effects
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe wishes section
    const wishesCard = document.querySelector('.wishes-card');
    if (wishesCard) {
        observer.observe(wishesCard);
    }
}

// ===== CTA BUTTON INTERACTION =====
function initCTAButton() {
    const ctaButton = document.getElementById('ctaButton');
    
    // Ripple effect on click
    ctaButton.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
}

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
window.addEventListener('scroll', debounce(() => {
    // Additional scroll-based animations can be added here
}, 10));

// ===== ACCESSIBILITY ENHANCEMENTS =====
// Keyboard navigation for buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            button.click();
        }
    });
});

// Reduce motion for users who prefer it
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('*').forEach(el => {
        el.style.animationDuration = '0.01s';
        el.style.animationIterationCount = '1';
        el.style.transitionDuration = '0.01s';
    });
}

// ===== CUSTOM CURSOR =====
function initCustomCursor() {
    const cursor = document.getElementById('customCursor');
    const cursorDot = document.getElementById('cursorDot');
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;
    
    // Track mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Show cursor
        cursor.classList.add('active');
        
        // Create trail effect
        if (Math.random() > 0.8) {
            createCursorTrail(e.clientX, e.clientY);
        }
    });
    
    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
    });
    
    // Click effect
    document.addEventListener('mousedown', () => {
        cursor.classList.add('clicking');
    });
    
    document.addEventListener('mouseup', () => {
        cursor.classList.remove('clicking');
    });
    
    // Smooth cursor animation
    function animateCursor() {
        // Smooth follow for outer circle
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        
        // Faster follow for dot
        dotX += (mouseX - dotX) * 0.25;
        dotY += (mouseY - dotY) * 0.25;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        cursor.style.transform = 'translate(-50%, -50%)';
        
        cursorDot.style.left = dotX + 'px';
        cursorDot.style.top = dotY + 'px';
        cursorDot.style.transform = 'translate(-50%, -50%)';
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
}

function createCursorTrail(x, y) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = x + 'px';
    trail.style.top = y + 'px';
    document.body.appendChild(trail);
    
    setTimeout(() => trail.remove(), 500);
}

// ===== CONSOLE EASTER EGG =====
console.log('%c🌕 Chúc Mừng Trung Thu! 🏮', 'font-size: 24px; color: #FFD700; font-weight: bold; text-shadow: 0 0 10px #FFD700;');
console.log('%cTrăng tròn đoàn viên — Chúc mọi nhà vui vẻ, hạnh phúc!', 'font-size: 16px; color: #87CEEB;');
console.log('%c✨ Made with love for Mid-Autumn Festival ✨', 'font-size: 14px; color: #FFD700; font-style: italic;');
