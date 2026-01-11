document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.querySelector('#navbar ul');

    menuIcon.addEventListener('click', () => {
        navList.classList.toggle('active');
        // Toggle animation for hamburger bars (optional)
        menuIcon.classList.toggle('open');
    });

    // Close menu when clicking a link
    document.querySelectorAll('#navbar ul li a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
        });
    });

    // 2. Dark/Light Mode Toggle
    const themeToggle = document.getElementById('profile-toggle');
    themeToggle.addEventListener('change', () => {
        document.body.classList.toggle('alt-body-theme');
    });

    // 3. Typewriter Effect Logic
const textElement = document.getElementById('typewriter-text');
const fullText = "A Full-Stack Web Developer passionate about building clean applications.";
let index = 0;

function typeWriterEffect() {
    if (index < fullText.length) {
        // Add the next letter
        textElement.textContent += fullText.charAt(index);
        index++;
        // Wait 50ms before the next letter
        setTimeout(typeWriterEffect, 100);
    } else {
        // The sentence is finished. Wait 2 seconds, then reset.
        setTimeout(() => {
            textElement.textContent = ""; // Clear the text
            index = 0;                    // Reset the counter
            typeWriterEffect();           // Start over
        }, 2000); // 2000ms = 2 second pause at the end
    }
}

// Call this inside your existing DOMContentLoaded listener
typeWriterEffect();
    // 4. Reveal on Scroll Logic
    const revealSections = () => {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(section => {
            const windowHeight = window.innerHeight;
            const revealTop = section.getBoundingClientRect().top;
            const revealPoint = 150;

            if (revealTop < windowHeight - revealPoint) {
                section.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealSections);

    // 5. Dynamic Project Loading (Example)
    const projectData = [
        { title: "E-Commerce App", desc: "A full-stack React shop." },
        { title: "Dashboard", desc: "Data visualization with D3.js." },
        { title: "Task Manager", desc: "Efficient productivity tool." }
    ];

    const container = document.getElementById('project-container');
    projectData.forEach(project => {
        container.innerHTML += `
            <div class="project-card">
                <h3>${project.title}</h3>
                <p>${project.desc}</p>
                <a href="#" style="color: var(--text-accent); text-decoration: none; margin-top: 10px; display: inline-block;">Learn More →</a>
            </div>
        `;
    });
    // Locate the button
    const ctaBtn = document.getElementById('cta-btn');

    // When clicked, scroll to the projects section
    ctaBtn.addEventListener('click', () => {
        const projectsSection = document.getElementById('projects');
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    });
});