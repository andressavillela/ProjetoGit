window.addEventListener("scroll",function() {
  const nav = document.querySelector("header");

  nav.classList.toggle("efeito-menu", window.scrollY > 0);
  
});