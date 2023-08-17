const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "33239789-edeb40e5557373312058accfd";
const perPage = "9";
const currentPage = "1";

async function fetchImages() {
  try {
    const response = await axios.get(
      `${BASE_URL}?q=garden&key=${API_KEY}&image_type=photo&per_page=${perPage}&page=${currentPage}`
    );
    return response.data.hits;
  } catch (error) {
    console.error(error);
  }
}

async function getContent() {
  const images = await fetchImages();
  const galleryContainer = document.getElementById("masonry");

  let content = images
    .map(
      (image) =>
        `<div class="masonryItem bg-modalBg sm:w-[100%] md:w-[50%] lg:w-[33.333%] mb-[10px] drop-shadow-md hover:shadow-lg  transform transition-transform ease-in hover:scale-105 hover:translate-y-[-2px]"><img class="w-[100%] h-[100%] px-2 pt-2 pb-6 block grayscale hover:grayscale-0" src="${image.webformatURL}" alt="project"></div>`
    )
    .join("");

  const tempContainer = document.createElement("div");
  tempContainer.innerHTML = content;

  while (tempContainer.firstChild) {
    galleryContainer.appendChild(tempContainer.firstChild);
  }
}

getContent();

