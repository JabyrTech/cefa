// Rotating text animation
const rotatingText = document.querySelector('.rotating-text span');
if (rotatingText) {
    const text = rotatingText.innerText;
    rotatingText.innerHTML = text.split('').map((char, i) => 
        `<span style="transform: rotate(${i * 8.5}deg)">${char}</span>`
    ).join('');
}

// Tab switching functionality
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Play button animation
const playButton = document.querySelector('.play-button');
if (playButton) {
    playButton.addEventListener('click', () => {
        playButton.classList.add('playing');
        setTimeout(() => {
            playButton.classList.remove('playing');
        }, 1000);
    });
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe sections for animations
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Form submission
const subscribeForm = document.querySelector('.subscribe-form');
if (subscribeForm) {
    subscribeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = subscribeForm.querySelector('input').value;
        if (email) {
            alert('Thank you for subscribing!');
            subscribeForm.reset();
        }
    });
}
