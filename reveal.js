let navBar = document.querySelector("#header");
let menuIcon = document.querySelector("#menu-icon");
let navBarMenu = document.querySelector("header nav");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navBarMenu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;

  if (scrollTop > 0) {
    navBar.classList.add("rolar");
  } else {
    navBar.classList.remove("rolar");
  }
});

// zera o formulario do email apois o envio
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    // Aguarda o envio do formulário e limpa os campos
    setTimeout(() => {
      this.reset();
    }, 100); // Pequeno atraso para garantir que o envio seja concluído
  });
