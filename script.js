window.addEventListener("scroll",function() {
  const nav = document.querySelector("header");

  nav.classList.toggle("efeito-menu", window.scrollY > 0);
  
});

var logo = document.querySelector(".logo");

logo.addEventListener ('click', function(){
  window.scrollTo (0, 0);
});