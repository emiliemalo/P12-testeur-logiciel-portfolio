// Function to update CV link based on current language
function updateCVLink(lang) {
    const cvLink = document.getElementById('cv-link');
    if (!cvLink) return;
    
    if (lang === 'en') {
        cvLink.setAttribute('href', 'cv-en.pdf');
        cvLink.setAttribute('aria-label', 'Download my CV in PDF (English)');
    } else {
        cvLink.setAttribute('href', 'cv.pdf');
        cvLink.setAttribute('aria-label', 'Télécharger mon CV en PDF');
    }
}

// Initialize CV link on page load
document.addEventListener('DOMContentLoaded', function() {
    // Get current language from html lang attribute or default to 'fr'
    const currentLang = document.documentElement.lang || 'fr';
    updateCVLink(currentLang);
});

// Export function to be used by other scripts
if (typeof window !== 'undefined') {
    window.updateCVLink = updateCVLink;
}
