
/* ==========================================
   DHRUV PORTFOLIO - JAVASCRIPT
========================================== */

/* MOBILE NAVIGATION */

const menuButton = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');

if (menuButton && links) {
    menuButton.addEventListener('click', () => {
        const open = links.classList.toggle('open');

        menuButton.setAttribute(
            'aria-expanded',
            String(open)
        );

        menuButton.textContent = open ? '✕' : '☰';
    });

    links.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            links.classList.remove('open');
            menuButton.setAttribute('aria-expanded', 'false');
            menuButton.textContent = '☰';
        });
    });
}


/* AUTOMATIC COPYRIGHT YEAR */

const yearElement = document.querySelector('#year');

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* SCROLL REVEAL ANIMATIONS */

const items = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08
    });

    items.forEach(item => observer.observe(item));
} else {
    items.forEach(item => item.classList.add('visible'));
}


/* ==========================================
   CONTACT FORM FUNCTIONALITY
========================================== */

const contactForm = document.querySelector('#contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        if (!contactForm.reportValidity()) {
            return;
        }

        // Portfolio owner's email address
        const ownerEmail = '25amtics241@gmail.com';

        const senderName = document
            .querySelector('#contact-name').value.trim();

        const senderEmail = document
            .querySelector('#contact-email').value.trim();

        const message = document
            .querySelector('#contact-message').value.trim();

        if (!senderName || !senderEmail || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Prepare email subject
        const subject = encodeURIComponent(
            'Portfolio Contact from ' + senderName
        );

        // Prepare email message
        const body = encodeURIComponent(
            'Name: ' + senderName + '\n' +
            'Email: ' + senderEmail + '\n\n' +
            'Message:\n' + message
        );

        // Open email application
        const mailtoLink =
            'mailto:' + ownerEmail +
            '?subject=' + subject +
            '&body=' + body;

        window.location.href = mailtoLink;

        // Update information message
        const notice = document.querySelector('#form-notice');

        if (notice) {
            notice.textContent =
                'Your email application should open. ' +
                'Please review and send your message.';
        }
    });
}
