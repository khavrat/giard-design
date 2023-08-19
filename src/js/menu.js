const burger = document.querySelector("#burger-menu");
const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const menu = document.querySelector("#menu");
const menuItems = document.querySelectorAll(".menu-item")

burger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  openMenu.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");
});

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.add('hidden');
    openMenu.classList.remove('hidden');
    closeMenu.classList.add('hidden');
  })
})