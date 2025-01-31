// Scroll-to-top Button
const scrollToTopButton = document.querySelector('.scroll-to-top');

// Show or hide the scroll-to-top button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Scroll to the top when the button is clicked
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth Scrolling for Anchor Links
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

smoothScrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjusting for navbar height
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Validation
const contactForm = document.querySelector('#contact form');
const nameInput = document.querySelector('#contact input[name="name"]');
const emailInput = document.querySelector('#contact input[name="email"]');
const messageInput = document.querySelector('#contact textarea[name="message"]');
const submitButton = document.querySelector('#contact .btn-primary');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate Name
    if (nameInput.value.trim() === '') {
        alert('Please enter your name');
        isValid = false;
    }

    // Validate Email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        alert('Please enter a valid email address');
        isValid = false;
    }

    // Validate Message
    if (messageInput.value.trim() === '') {
        alert('Please enter a message');
        isValid = false;
    }

    if (isValid) {
        // If form is valid, submit it (for demo purposes, just reset the form here)
        alert('Your message has been sent!');
        contactForm.reset();
    }
});

// Modal Popup (Example Usage)
const openModalButton = document.querySelector('#openModalButton'); // Button to open modal
const modal = document.querySelector('.modal');
const closeModalButton = document.querySelector('.modal .close'); // Button to close modal

openModalButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal if clicked outside of the modal content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Carousel (if you're using one)
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showNextItem() {
    carouselItems[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselItems[currentIndex].classList.add('active');
}

function showPreviousItem() {
    carouselItems[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    carouselItems[currentIndex].classList.add('active');
}

// Add event listeners to carousel buttons
const nextButton = document.querySelector('.carousel-control-next');
const prevButton = document.querySelector('.carousel-control-prev');

nextButton.addEventListener('click', showNextItem);
prevButton.addEventListener('click', showPreviousItem);

// Auto slide every 5 seconds (optional)
setInterval(showNextItem, 5000);
