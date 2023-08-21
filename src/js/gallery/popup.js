import attachImg from "../../images/overall/attach.png";
import { contentData } from "./getContent";

const gallery = document.getElementById("projectGallery");
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
