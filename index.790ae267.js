function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire3110;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequire3110=r),r.register("kyEFX",function(t,n){e(t.exports,"register",function(){return o},function(e){return o=e}),e(t.exports,"resolve",function(){return r},function(e){return r=e});var o,r,a={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},r=function(e){var t=a[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),r("kyEFX").register(JSON.parse('{"g0QCb":"index.790ae267.js","5cubp":"attach.943badb9.png"}'));var a={};a=new URL(r("kyEFX").resolve("5cubp"),import.meta.url).toString();let s=1;const i=document.getElementById("masonry"),d=document.getElementById("rollGalery"),l=document.getElementById("arrow"),c=document.getElementById("smoke"),p=document.getElementById("loader");d.addEventListener("click",f);let m=[];async function u(){try{let e=await axios.get(`https://pixabay.com/api/?q=garden&key=33239789-edeb40e5557373312058accfd&image_type=photo&per_page=6&page=${s}`);return e.data.hits}catch(e){console.error(e)}}async function g(){p.classList.remove("hidden");let e=await u();1===s&&(m=[],i.innerHTML=""),m=m.concat(e);let t=m.map(e=>`<div class="masonryItem bg-modalBg sm:w-[100%] md:w-[50%] lg:w-[33.333%] mb-[10px] drop-shadow-md hover:shadow-lg  transform transition-transform ease-in hover:scale-105 hover:translate-y-[-2px] cursor-pointer"><img class="w-[100%] h-[100%] px-2 pt-2 pb-6 block grayscale hover:grayscale-0" src="${e.webformatURL}" alt="project"></div>`).join("");i.innerHTML=t,setTimeout(()=>{new Masonry(i,{itemSelector:".masonryItem"})},700),p.classList.add("hidden")}async function f(e){e.preventDefault(),i.classList.toggle("toggle-value-content"),l.classList.toggle("rotate-180"),i.classList.contains("toggle-value-content")?(d.querySelector("span").textContent="Rozwiń",c.classList.add("bg-gradient-to-t","from-secondaryBg","dark:from-modalBg"),c.classList.remove("pointer-events-none")):(d.querySelector("span").textContent="Wąski",c.classList.remove("bg-gradient-to-t","from-secondaryBg","dark:from-modalBg"),c.classList.add("pointer-events-none")),s=1===s?s+1:s-1,await g()}g();const b=document.getElementById("masonry");document.getElementById("modal-popup");const y=document.getElementById("popupContainer");b.addEventListener("click",function(e){let t=m.find(t=>t.webformatURL===e.target.src);if(t){var n;let e=`
<div class="absolute top-[-2px] right-[80px] z-10">
  <img class="max-md:hidden"
    src="${(n=a)&&n.__esModule?n.default:n}"
    alt="attach"
    width="40"
    height="40"
  />
</div>
<div class="bg-modalBg mb-[6px] drop-shadow-md rounded-lg md:rotate-[5deg] md:animate-[swing_1s]" ><img src="${t.webformatURL}" alt="project information" class="w-[100%] h-[250px] md:h-[300px] px-2 pt-2 pb-6 block"/></div>
<div class="pb-2">  
  <p class="font-medium">Rok założenia: <span>2020</span></p>
  <p class="font-medium">Tw\xf3rcy projekt\xf3w: <span>Dobrze Człowiek</span></p>
  <p class="font-medium">Budżet: <span>1 000 000 zł</span></p>
</div>  
<p>Ten piękny park powstał na podstawie projektu znanego nam tylko dobremu człowiekowi. Są rośliny sadzone, o kt\xf3re nie trzeba dbać, więc personel może leżeć tylko na trawniku</p>
<p class="font-medium my-4">Podobał ci się projekt?</p>
<div class="flex justify-between">
  <a href="tel:+480-000-000" class="inline-block rounded-full px-4  py-2  bg-brand border border-transparent font-sans lg:text-base sm:text-sm text-primaryBg leading-1.5 cursor-pointer transition-all duration-250 ease-in hover:bg-secondBrand hover:border-secondBrand">Skontaktuj się z nami</a>
</div>`;y.innerHTML=e}});
//# sourceMappingURL=index.790ae267.js.map
