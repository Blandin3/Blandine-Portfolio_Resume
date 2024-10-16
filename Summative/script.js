document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav');
    const sections = document.querySelectorAll('section');

    // Show all sections by default
    sections.forEach(section => {
        section.style.display = 'block'; // Show all sections
    });

    // Show/hide the navigation menu on menu toggle click
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('hidden');
    });

    // Add click event for navigation links
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            const targetId = link.getAttribute('href').substring(1); // Get the target section ID

            // Scroll to the target section smoothly
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });  
});






