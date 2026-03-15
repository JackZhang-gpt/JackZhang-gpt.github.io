// Academic Style Blog - Main JavaScript
// Provides interactive features for table of contents, mobile menu, etc.

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    initMobileMenu();

    // Table of contents highlighting
    initTOCHighlighting();

    // Smooth scroll for anchor links
    initSmoothScroll();

    // Lazy loading images
    initLazyLoading();

    // Initialize MathJax if present
    if (typeof MathJax !== 'undefined') {
        MathJax.typesetPromise();
    }
});

// Mobile menu functionality
function initMobileMenu() {
    const toggleButton = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (!toggleButton || !mobileMenu) return;

    toggleButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        toggleButton.setAttribute('aria-expanded',
            mobileMenu.classList.contains('active'));
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mobileMenu.contains(event.target) &&
            !toggleButton.contains(event.target) &&
            mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            toggleButton.setAttribute('aria-expanded', 'false');
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            toggleButton.setAttribute('aria-expanded', 'false');
        }
    });
}

// Table of contents highlighting
function initTOCHighlighting() {
    const tocLinks = document.querySelectorAll('.toc-sidebar a, .toc-container a');
    const headers = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
        .filter(h => h.id); // Only headers with IDs

    if (tocLinks.length === 0 || headers.length === 0) return;

    // Create IntersectionObserver to track visible headers
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -80% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            const id = entry.target.id;
            const tocLink = document.querySelector(`.toc-sidebar a[href="#${id}"], .toc-container a[href="#${id}"]`);

            if (tocLink) {
                if (entry.isIntersecting) {
                    // Remove active class from all links
                    tocLinks.forEach(link => link.classList.remove('active'));
                    // Add to current link
                    tocLink.classList.add('active');

                    // Also highlight parent items in nested TOC
                    let parent = tocLink.parentElement.parentElement;
                    while (parent && parent.classList.contains('toc-sidebar') === false) {
                        const parentLink = parent.querySelector('a');
                        if (parentLink) {
                            parentLink.classList.add('active');
                        }
                        parent = parent.parentElement;
                    }
                }
            }
        });
    }, observerOptions);

    // Observe all headers
    headers.forEach(header => observer.observe(header));

    // Add click handler for smooth scroll
    tocLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Smooth scroll
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Update URL without page jump
                history.pushState(null, null, targetId);
            }
        });
    });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip if it's a TOC link (handled by initTOCHighlighting)
            if (this.closest('.toc-sidebar') || this.closest('.toc-container')) {
                return;
            }

            // Only process internal anchor links
            if (href === '#') return;

            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Update URL
                history.pushState(null, null, href);
            }
        });
    });
}

// Lazy loading for images
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');

        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// Table of contents initialization (called from layout if needed)
window.initTOC = function() {
    initTOCHighlighting();
    initSmoothScroll();
};

// Print functionality
function setupPrintButton() {
    const printButton = document.getElementById('print-button');
    if (printButton) {
        printButton.addEventListener('click', function() {
            window.print();
        });
    }
}

// Theme switcher (for future dark mode)
function initThemeSwitcher() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    const currentTheme = localStorage.getItem('theme') || 'light';

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.textContent = '☀️';
    }

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');

        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '☀️';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '🌙';
        }
    });
}

// Initialize on load
setupPrintButton();
initThemeSwitcher();