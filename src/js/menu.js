import { toggleVisibleBtnByMenu } from "./scrollBtn";
const burger = document.querySelector("#burger-menu");
const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const menu = document.querySelector("#menu");
const menuItems = document.querySelectorAll(".menu-item");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  openMenu.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");
  body.classList.toggle("overflow-hidden");
  body.classList.toggle("no-scroll");

  toggleVisibleBtnByMenu();
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.add("hidden");
    openMenu.classList.remove("hidden");
    closeMenu.classList.add("hidden");
    body.classList.remove("overflow-hidden", "no-scroll");
  });
});
