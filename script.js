const menuToggle = document.getElementById("menu-toggle");
const navButtons = document.getElementById("nav-buttons");

menuToggle.addEventListener("click", () => {
    navButtons.classList.toggle("show"); 
});