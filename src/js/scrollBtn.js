const scrollBtn = document.getElementById("scrollBtn");
const menu = document.querySelector("#menu");

scrollBtn.addEventListener("click", scrollUp);

function scrollUp() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight) {
    scrollBtn.classList.remove("hidden");
  } else {
    scrollBtn.classList.add("hidden");
  }
});

export function toggleVisibleBtnByMenu() {
  if (menu.classList.contains("hidden")) {
    scrollBtn.classList.remove("hidden");
  } else {
    scrollBtn.classList.add("hidden");
  }
}
