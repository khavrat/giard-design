const grid = document.querySelector("#masonry");

window.onload = () => {
  new Masonry(grid, {
    itemSelector: ".masonryItem",
  });
};
