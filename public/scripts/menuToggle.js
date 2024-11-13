// /public/scripts/menuToggle.js
document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu-icon");
    const list = document.getElementById("movil-nav");
    if (menu) {
        menu.addEventListener("click", () => {
            menu.classList.toggle("active");
            list.classList.toggle("visible")
        });
    }
});

