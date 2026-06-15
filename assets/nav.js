// Inject navigation and wire up the mobile hamburger menu
document.addEventListener('DOMContentLoaded', function () {
    const navHTML = `
        <nav class="site-nav">
            <div class="nav-inner">
                <a href="index.html" class="nav-brand">Ariana Ariaei</a>
                <button class="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="nav-links">
                    <span></span><span></span><span></span>
                </button>
                <ul class="nav-links" id="nav-links">
                    <li><a href="index.html" id="nav-home">Home</a></li>
                    <li><a href="cv.html" id="nav-cv">CV</a></li>
                    <li><a href="transcript.html" id="nav-transcript">Transcript</a></li>
                    <li><a href="projects.html" id="nav-projects">Projects</a></li>
                </ul>
            </div>
        </nav>
    `;

    const placeholder = document.getElementById('nav-placeholder');
    if (!placeholder) return;
    placeholder.innerHTML = navHTML;

    // Highlight active page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = {
        '': 'nav-home',
        'index.html': 'nav-home',
        'cv.html': 'nav-cv',
        'transcript.html': 'nav-transcript',
        'projects.html': 'nav-projects'
    };
    const activeNavId = navLinks[currentPage];
    if (activeNavId) {
        const activeLink = document.getElementById(activeNavId);
        if (activeLink) activeLink.classList.add('active');
    }

    // Hamburger toggle
    const nav = placeholder.querySelector('.site-nav');
    const toggle = placeholder.querySelector('.nav-toggle');
    const links = placeholder.querySelector('.nav-links');

    if (toggle && nav && links) {
        toggle.addEventListener('click', function () {
            const isOpen = nav.classList.toggle('open');
            toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
        });

        // Close the menu after a link is tapped
        links.addEventListener('click', function (e) {
            if (e.target.tagName === 'A') {
                nav.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
                toggle.setAttribute('aria-label', 'Open menu');
            }
        });
    }
});
