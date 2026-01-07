// Set active navigation link based on current page
function setActiveNavLink() {   
const navLinks = document.querySelectorAll(".navbar__link");
const currentPage = window.location.pathname;

navLinks.forEach(link => {
    if (link.getAttribute("href").includes(currentPage.split("/").pop())) {
        link.classList.add("active");
    }
});

};
setActiveNavLink();

// Theme toggle functionality
function themeToggle() {
    const themeToggle = document.querySelector(".theme-toggle");
    const body = document.body;
    const icon = themeToggle.querySelector("i");

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark");
        icon.classList.replace("ri-moon-fill", "ri-sun-fill");
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark");

        if (body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            icon.classList.replace("ri-moon-fill", "ri-sun-fill");
        } else {
            localStorage.setItem("theme", "light");
            icon.classList.replace("ri-sun-fill", "ri-moon-fill");
        }
    });

};
themeToggle()
