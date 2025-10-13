// Load navigation HTML
document.addEventListener('DOMContentLoaded', function() {
    const navHTML = `
        <nav>
            <ul>
                <li><a href="index.html" id="nav-home">Home</a></li>
                <li><a href="cv.html" id="nav-cv">CV</a></li>
                <li><a href="transcript.html" id="nav-transcript">Transcript</a></li>
                <li><a href="projects.html" id="nav-projects">Projects & Presentations</a></li>
            </ul>
        </nav>
    `;
    
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = navHTML;
    }
    
    // Highlight active page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = {
        'index.html': 'nav-home',
        '': 'nav-home',
        'cv.html': 'nav-cv',
        'transcript.html': 'nav-transcript',
        'projects.html': 'nav-projects'
    };
    
    const activeNavId = navLinks[currentPage];
    if (activeNavId) {
        const activeLink = document.getElementById(activeNavId);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
});