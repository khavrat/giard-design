function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequire3110;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){r[e]=n},n.parcelRequire3110=o),o.register("kyEFX",function(n,t){e(n.exports,"register",function(){return r},function(e){return r=e}),e(n.exports,"resolve",function(){return o},function(e){return o=e});var r,o,a={};r=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)a[n[t]]=e[n[t]]},o=function(e){var n=a[e];if(null==n)throw Error("Could not resolve bundle with id "+e);return n}}),o("kyEFX").register(JSON.parse('{"6sgVH":"index.b5b395c1.js","5cubp":"attach.943badb9.png"}'));var a={};a=new URL(o("kyEFX").resolve("5cubp"),import.meta.url).toString();var i=o("5L5rp");const s=document.getElementById("projectGallery"),d=document.getElementById("popupContainer");s.addEventListener("click",function(e){let n=(0,i.contentData).find(n=>n.webformatURL===e.target.src);if(n){var t;let e=`
<div class="absolute top-[-2px] right-[80px] z-10">
  <img class="max-md:hidden"
    src="${(t=a)&&t.__esModule?t.default:t}"
    alt="attach"
    width="40"
    height="40"
  />
</div>
<div class="bg-modalBg mb-[6px] drop-shadow-md rounded-lg md:rotate-[5deg] md:animate-[swing_1s]" ><img src="${n.webformatURL}" alt="project information" class="w-[100%] h-[250px] md:h-[300px] px-2 pt-2 pb-6 block"/></div>
<div class="pb-2">
  <p class="font-medium">Rok założenia: <span>2020</span></p>
  <p class="font-medium">Tw\xf3rcy projekt\xf3w: <span>Dobrze Człowiek</span></p>
  <p class="font-medium">Budżet: <span>1 000 000 zł</span></p>
</div>
<p>Ten piękny park powstał na podstawie projektu znanego nam tylko dobremu człowiekowi. Są rośliny sadzone, o kt\xf3re nie trzeba dbać, więc personel może leżeć tylko na trawniku</p>
<p class="font-medium my-4">Podobał ci się projekt?</p>
<div class="flex justify-between">
  <a href="tel:+480-000-000" class="inline-block rounded-full px-4  py-2  bg-brand border border-transparent font-sans lg:text-base sm:text-sm text-primaryBg leading-1.5 cursor-pointer transition-all duration-250 ease-in hover:bg-secondBrand hover:border-secondBrand">Skontaktuj się z nami</a>
</div>`;d.innerHTML=e}});
//# sourceMappingURL=index.b5b395c1.js.map
