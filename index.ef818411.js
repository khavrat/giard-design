!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},l=e.parcelRequire3110;null==l&&((l=function(e){if(e in o)return o[e].exports;if(e in n){var l=n[e];delete n[e];var t={id:e,exports:{}};return o[e]=t,l.call(t.exports,t,t.exports),t.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequire3110=l);var t=l("46zAn");let r=document.querySelector("#burger-menu"),d=document.querySelector("#open-menu"),i=document.querySelector("#close-menu"),s=document.querySelector("#menu"),c=document.querySelectorAll(".menu-item"),u=document.querySelector("body");r.addEventListener("click",()=>{s.classList.toggle("hidden"),d.classList.toggle("hidden"),i.classList.toggle("hidden"),u.classList.toggle("overflow-hidden"),u.classList.toggle("no-scroll"),(0,t.toggleVisibleBtnByMenu)()}),c.forEach(e=>{e.addEventListener("click",()=>{s.classList.add("hidden"),d.classList.remove("hidden"),i.classList.add("hidden"),u.classList.remove("overflow-hidden","no-scroll")})})}();
//# sourceMappingURL=index.ef818411.js.map
