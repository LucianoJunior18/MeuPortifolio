let navBar = document.querySelector("#header");
let menuIcon = document.querySelector("#menu-icon");
let navBarMenu = document.querySelector("header nav");

// Abrir ou fechar o menu ao clicar no ícone do menu
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navBarMenu.classList.toggle("active");
});

// Fechar o menu ao clicar em qualquer link
const menuLinks = document.querySelectorAll("header nav a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Fecha o menu quando um link for clicado
    menuIcon.classList.remove("bx-x");
    navBarMenu.classList.remove("active");
  });
});

// Adicionando um efeito de rolar no cabeçalho ao rolar a página
document.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  if (scrollTop > 0) {
    navBar.classList.add("rolar");
  } else {
    navBar.classList.remove("rolar");
  }
});

// Zera o formulário de e-mail após o envio
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    setTimeout(() => {
      this.reset();
    }, 100); // Atraso para garantir que o envio seja concluído
  });
