const menuToggle = document.getElementById("barrinhas");  // O botão de menu
const navButtons = document.getElementById("botoes-hidden"); // O menu oculto

// Adiciona um ouvinte de evento para alternar a classe 'show' quando o botão for clicado
menuToggle.addEventListener("click", () => {
    navButtons.classList.toggle("show"); // Alterna a visibilidade do menu
});