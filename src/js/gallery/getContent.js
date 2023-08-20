import attachImg from "../../images/overall/attach.png"
  
const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "33239789-edeb40e5557373312058accfd";
const perPage = 6;
let currentPage = 1;

const galleryContainer = document.getElementById("masonry");
const rollBtn = document.getElementById("rollGalery");
const arrowIcon = document.getElementById("arrow");
const smokeBg = document.getElementById("smoke");

const loader = document.getElementById("loader");

rollBtn.addEventListener("click", toggleValueContent);

let contentData = [];

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
  loader.classList.remove("hidden");

  const images = await fetchImages();

  if (currentPage === 1) {
    contentData = [];
    galleryContainer.innerHTML = "";
  }
  contentData = contentData.concat(images);
  const renderData = contentData
    .map(
      (image) =>
        `<div class="masonryItem bg-modalBg sm:w-[100%] md:w-[50%] lg:w-[33.333%] mb-[10px] drop-shadow-md hover:shadow-lg  transform transition-transform ease-in hover:scale-105 hover:translate-y-[-2px] cursor-pointer"><img class="w-[100%] h-[100%] px-2 pt-2 pb-6 block grayscale hover:grayscale-0" src="${image.webformatURL}" alt="project"></div>`
    )
    .join("");
  galleryContainer.innerHTML = renderData;
  setTimeout(() => {
    new Masonry(galleryContainer, {
      itemSelector: ".masonryItem",
    });
  }, 700);
  loader.classList.add("hidden");
}

getContent();

function toggleCurrentPage() {
  currentPage = currentPage === 1 ? currentPage + 1 : currentPage - 1;
}

async function toggleValueContent(e) {
  e.preventDefault();

  galleryContainer.classList.toggle("toggle-value-content");
  arrowIcon.classList.toggle("rotate-180");

  if (galleryContainer.classList.contains("toggle-value-content")) {
    rollBtn.querySelector("span").textContent = "Rozwiń";
    smokeBg.classList.add(
      "bg-gradient-to-t",
      "from-secondaryBg",
      "dark:from-modalBg"
    );
    smokeBg.classList.remove("pointer-events-none");

    toggleCurrentPage();
  } else {
    rollBtn.querySelector("span").textContent = "Wąski";
    smokeBg.classList.remove(
      "bg-gradient-to-t",
      "from-secondaryBg",
      "dark:from-modalBg"
    );
    smokeBg.classList.add("pointer-events-none");

    toggleCurrentPage();
  }
  await getContent();
}

//popup

const gallery = document.getElementById("masonry");
const popupModal = document.getElementById("modal-popup");
const popupContainer = document.getElementById("popupContainer");

gallery.addEventListener("click", handleImageClick);

function handleImageClick(e) {
  const selectedImage = contentData.find(
    (image) => image.webformatURL === e.target.src
  );

  if (selectedImage) {
    const modalContent = `
<div class="absolute top-[-2px] right-[80px] z-10">
  <img class="max-md:hidden"
    src="${attachImg}"
    alt="attach"
    width="40"
    height="40"
  />
</div>
<div class="bg-modalBg mb-[6px] drop-shadow-md rounded-lg md:rotate-[5deg] md:animate-[swing_1s]" ><img src="${selectedImage.webformatURL}" alt="project information" class="w-[100%] h-[250px] md:h-[300px] px-2 pt-2 pb-6 block"/></div>
<div class="pb-2">  
  <p class="font-medium">Rok założenia: <span>2020</span></p>
  <p class="font-medium">Twórcy projektów: <span>Dobrze Człowiek</span></p>
  <p class="font-medium">Budżet: <span>1 000 000 zł</span></p>
</div>  
<p>Ten piękny park powstał na podstawie projektu znanego nam tylko dobremu człowiekowi. Są rośliny sadzone, o które nie trzeba dbać, więc personel może leżeć tylko na trawniku</p>
<p class="font-medium my-4">Podobał ci się projekt?</p>
<div class="flex justify-between">
  <a href="tel:+480-000-000" class="inline-block rounded-full px-4  py-2  bg-brand border border-transparent font-sans lg:text-base sm:text-sm text-primaryBg leading-1.5 cursor-pointer transition-all duration-250 ease-in hover:bg-secondBrand hover:border-secondBrand">Skontaktuj się z nami</a>
</div>`;

    popupContainer.innerHTML = modalContent;
  }
}
