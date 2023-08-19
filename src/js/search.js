const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const tags = document.querySelectorAll(".searchtag");

searchInput.addEventListener("input", handleSearch);

function handleSearch() {
  const searchTag = searchInput.value.toLocaleLowerCase();
  searchResults.innerHTML = "";

  tags.forEach((tag) => {
    const title = tag.textContent.toLocaleLowerCase();

    if (title.includes(searchTag) && searchTag !== '') {
      const resultItem = document.createElement("a");
      resultItem.href = `#${createSafeId(title)}`;
      resultItem.textContent = title;
      resultItem.classList.add(
        "block",
        "p-4",
        "font-medium",
        "text-sm",
        "menu-item",
        "rounded-lg",
        "hover:bg-hoverBg",
        "hover:text-secondBrand"
      );
      searchResults.appendChild(resultItem);
    }
  });
}

function createSafeId(title) {
    return title.replace(/\s+/g, "-").toLocaleLowerCase();
}

