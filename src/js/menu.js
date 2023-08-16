const burger = document.querySelector("#burger-menu");
const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const menu = document.querySelector("#menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  openMenu.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");
});
