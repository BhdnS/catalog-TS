(()=>{"use strict";var t={91:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},542:(t,e,o)=>{t.exports=o.p+"images/del.b00648acfdf10c1285bc.svg"},691:(t,e,o)=>{t.exports=o.p+"images/catalog-16.a8d905f7d0e9e0dbcc2a.png"},476:(t,e,o)=>{t.exports=o.p+"images/catalog-32.a74ed329a1e72101e4b0.png"},314:(t,e,o)=>{t.exports=o.p+"images/catalog-96.1cc54319917f1b5fe64d.png"},51:(t,e,o)=>{t.exports=o.p+"images/moon.1d5141bf15c49a1dbf1c.svg"},577:(t,e,o)=>{t.exports=o.p+"images/sun.ac2959a5642aa40a2a43.svg"}},e={};function o(s){var i=e[s];if(void 0!==i)return i.exports;var r=e[s]={exports:{}};return t[s](r,r.exports,o),r.exports}o.m=t,o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var s=e.getElementsByTagName("script");if(s.length)for(var i=s.length-1;i>-1&&!t;)t=s[i--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t})(),o.b=document.baseURI||self.location.href,(()=>{var t=o(91),e=o.n(t),s=new URL(o(691),o.b),i=new URL(o(476),o.b),r=new URL(o(314),o.b),a=new URL(o(577),o.b);e()(s),e()(i),e()(r),e()(a);const n=o(542);class c{constructor(){this.btn=document.querySelector("#btn"),this.tbody=document.querySelector("#tbody"),this.nameInput=document.querySelector("#nameInput"),this.priceInput=document.querySelector("#priceInput")}clickBtn(){var t;null===(t=this.btn)||void 0===t||t.addEventListener("click",(t=>{let e=this.textInput();t.preventDefault(),this.tbody&&(this.tbody.insertAdjacentHTML("beforeend",e),this.updateLocalStorage(),this.nameInput&&this.priceInput&&(this.nameInput.value="",this.priceInput.value=""))}))}clickDel(){var t;null===(t=this.tbody)||void 0===t||t.addEventListener("click",(t=>{const e=t.target;if(e.classList.contains("img")){const t=e.closest("tr");null==t||t.remove(),this.updateLocalStorage(),this.tbodyChild()}}))}loadTextLocalStorage(){const t=localStorage.getItem("userText");t&&this.tbody&&(this.tbody.innerHTML=t)}updateLocalStorage(){if(this.tbody){const t=this.tbody.innerHTML;localStorage.setItem("userText",t)}}tbodyChild(){this.tbody&&0===this.tbody.childElementCount&&(c.count=0)}textInput(){var t,e;let o=null===(t=this.nameInput)||void 0===t?void 0:t.value,s=null===(e=this.priceInput)||void 0===e?void 0:e.value,i="";return o&&s&&(c.count++,i=`\n        <tr>\n          <td>${c.count}</td>\n          <td>${o}</td>\n          <td>${s}</td>\n          <td><img class="img" src="${n}"></td>\n        </tr>\n      `),i}}c.count=0;const l=new c;l.clickBtn(),l.clickDel(),l.loadTextLocalStorage();(new class extends c{constructor(){super(),this.clear=document.querySelector("#clear")}clickClear(){var t;null===(t=this.clear)||void 0===t||t.addEventListener("click",(()=>{c.count=0,this.tbody&&(this.tbody.innerHTML="",this.updateLocalStorage())}))}}).clickClear();const d=o(577),u=o(51);const h=new class{constructor(){this.body=document.querySelector("body"),this.img=document.querySelector("#theme")}clickTheme(){var t;null===(t=this.img)||void 0===t||t.addEventListener("click",(()=>{var t;(null===(t=this.img)||void 0===t?void 0:t.classList.contains("sun"))?this.darkState():this.lightState()}))}loadLocalStorage(){"dark"===localStorage.getItem("theme")?this.darkState():this.lightState()}darkState(){this.body&&this.img&&(this.body.classList.add("dark"),this.img.classList.remove("sun"),this.img.classList.add("moon"),this.img.src=u,localStorage.setItem("theme","dark"))}lightState(){this.body&&this.img&&(this.body.classList.remove("dark"),this.img.classList.add("sun"),this.img.classList.remove("moon"),this.img.src=d,localStorage.setItem("theme","light"))}};h.clickTheme(),h.loadLocalStorage()})()})();