const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll("#navbar a");
const sections = document.querySelectorAll("section");

// Toggle mobile menu
menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});

// Highlight active link while scrolling
window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});