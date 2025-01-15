const menuToggle = document.getElementById("barrinhas"); 
const navButtons = document.getElementById("botoes-hidden");

menuToggle.addEventListener("click", () => {
    navButtons.classList.toggle("show");
});

