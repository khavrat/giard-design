!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire3110;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequire3110=o),o.register("iE7OH",function(t,n){e(t.exports,"register",function(){return r},function(e){return r=e}),e(t.exports,"resolve",function(){return o},function(e){return o=e});var r,o,a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},o=function(e){var t=a[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),o.register("aNJCr",function(t,n){e(t.exports,"getBundleURL",function(){return r},function(e){return r=e});var r,o={};r=function(e){var t=o[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),o[e]=t),t}}),o("iE7OH").register(JSON.parse('{"85Po0":"index.b4ecf49a.js","7VVXT":"attach.943badb9.png"}'));var a={};a=o("aNJCr").getBundleURL("85Po0")+o("iE7OH").resolve("7VVXT");var i=o("khLFW");let s=document.getElementById("projectGallery"),d=document.getElementById("popupContainer");s.addEventListener("click",function(e){let t=(0,i.contentData).find(t=>t.webformatURL===e.target.src);if(t){var n;let e=`
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
</div>`;d.innerHTML=e}})}();
//# sourceMappingURL=index.b4ecf49a.js.map
