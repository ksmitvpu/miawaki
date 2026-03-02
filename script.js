// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Dark mode toggle
const toggleBtn = document.getElementById('darkModeToggle');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleBtn.textContent = 
        document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Contact form validation
const form = document.getElementById('contactForm');
const message = document.getElementById('formMessage');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const userMessage = document.getElementById('message').value.trim();

    if(name.length < 3){
        message.textContent = "Name must be at least 3 characters.";
        message.style.color = "red";
        return;
    }

    if(!email.includes("@")){
        message.textContent = "Please enter a valid email.";
        message.style.color = "red";
        return;
    }

    if(userMessage.length < 10){
        message.textContent = "Message must be at least 10 characters.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Message sent successfully!";
    message.style.color = "green";
    form.reset();
});
