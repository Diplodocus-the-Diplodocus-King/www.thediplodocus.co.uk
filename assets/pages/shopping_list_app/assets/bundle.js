!function(e){var n={};function r(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)r.d(t,i,function(n){return e[n]}.bind(null,i));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=4)}([function(e,n,r){var t=r(1),i=r(2);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1};t(i,a);e.exports=i.locals||{}},function(e,n,r){"use strict";var t,i=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},a=function(){var e={};return function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[n]=r}return e[n]}}(),o=[];function c(e){for(var n=-1,r=0;r<o.length;r++)if(o[r].identifier===e){n=r;break}return n}function s(e,n){for(var r={},t=[],i=0;i<e.length;i++){var a=e[i],s=n.base?a[0]+n.base:a[0],l=r[s]||0,u="".concat(s," ").concat(l);r[s]=l+1;var f=c(u),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(o[f].references++,o[f].updater(d)):o.push({identifier:u,updater:m(d,n),references:1}),t.push(u)}return t}function l(e){var n=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var i=r.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(e){n.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(n);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var u,f=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function d(e,n,r,t){var i=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=f(n,i);else{var a=document.createTextNode(i),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(a,o[n]):e.appendChild(a)}}function p(e,n,r){var t=r.css,i=r.media,a=r.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),a&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var h=null,v=0;function m(e,n){var r,t,i;if(n.singleton){var a=v++;r=h||(h=l(n)),t=d.bind(null,r,a,!1),i=d.bind(null,r,a,!0)}else r=l(n),t=p.bind(null,r,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var r=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<r.length;t++){var i=c(r[t]);o[i].references--}for(var a=s(e,n),l=0;l<r.length;l++){var u=c(r[l]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}r=a}}}},function(e,n,r){(n=r(3)(!1)).push([e.i,".card{\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 250px;\r\n    height: 350px;\r\n}\r\n\r\n.recipe-title{\r\n    overflow-wrap: break-word;\r\n}\r\n\r\n.filtered{\r\n    display: none !important;\r\n}\r\n\r\n.card-container{\r\n    width: 1060px;\r\n}\r\n\r\ni.add{\r\n    display: inline;\r\n    position: relative;\r\n    top: -250px;\r\n    left: 215px;\r\n    color: white;\r\n    opacity: 0.8;\r\n}\r\n\r\ni.add:hover {\r\n    opacity: 1.0;\r\n}\r\n\r\ni.add:active{\r\n    color: rgb(80, 255, 138);\r\n}\r\n\r\ni.delete:hover {\r\n    color: white;\r\n}\r\n\r\ni.delete:active{\r\n    color: red;\r\n}\r\n\r\n.details{\r\n    position: relative;\r\n    top: -20px;\r\n}\r\n\r\n.delete{\r\n    color: grey;\r\n    position: relative;\r\n    cursor: pointer;\r\n    top: 0px;\r\n    left: 10px;\r\n}\r\n\r\n.list-group{\r\n    width: 360px;\r\n    display: inline-block;\r\n}\r\n\r\n.list{\r\n    position: relative;\r\n}\r\n\r\nul.veg {\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0px;\r\n}\r\n\r\nul.shop {\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 380px;\r\n}\r\n\r\nul.spice {\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 760px;\r\n}\r\n\r\n.veg li{\r\n    background-color: rgb(164, 255, 164);\r\n}\r\n\r\n.shop li{\r\n    background-color: rgb(166, 221, 255);\r\n}\r\n\r\n.spice li{\r\n    background-color: peachpuff;\r\n}\r\n\r\nh6{\r\n    text-align: center;\r\n}\r\n\r\n.snackbar{\r\n    width: 200px;\r\n    padding: 20px;\r\n    position: fixed;\r\n    left: 50%;\r\n    margin-left: -120px;\r\n    top: 0;\r\n    border-radius: 0 0 5px 5px;\r\n    box-shadow: 1px 3px 5px rgba(0,0,0,0.2);\r\n    background: #ff6565;\r\n    text-align: center;\r\n    color: #fff;\r\n    margin-top: -100%;\r\n    transition: all 0.2s;\r\n}\r\n\r\n.snackbar.active{\r\n    margin-top: 0;\r\n}\r\n\r\n",""]),e.exports=n},function(e,n,r){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r=function(e,n){var r=e[1]||"",t=e[3];if(!t)return r;if(n&&"function"==typeof btoa){var i=(o=t,c=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=t.sources.map((function(e){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(e," */")}));return[r].concat(a).concat([i]).join("\n")}var o,c,s;return[r].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(r,"}"):r})).join("")},n.i=function(e,r,t){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(t)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);t&&i[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),n.push(s))}},n}},function(e,n,r){"use strict";function t(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}r.r(n);var i=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.recipes=db.collection("recipes")}var n,r,i;return n=e,(r=[{key:"getRecipes",value:function(e){this.recipes.onSnapshot((function(n){n.docChanges().forEach((function(n){"added"===n.type&&e(n.doc.data())}))}))}}])&&t(n.prototype,r),i&&t(n,i),e}();function a(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var o=function(){function e(n,r,t,i){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.cardContainer=n,this.vegList=r,this.shopList=t,this.spiceList=i,this.vegArray=new Array,this.shopArray=new Array,this.spiceArray=new Array}var n,r,t;return n=e,(r=[{key:"render",value:function(e){var n='<div class="card shadow-lg rounded my-1 mx-auto">\n            <img src="assets/img/'.concat(e.imgName,'" class="time card-img-top" width="250" height="250">\n            <i class="far fa-plus-square fa-2x add"></i>\n            <div class="icon bg-light mx-auto text-centre">\n                <img src="" alt="">\n            </div>\n            <div class="text-muted text-uppercase text-center details">\n                <h6 class="my-2 recipe-title">').concat(e.title,'</h6>\n                <div class="my-1">').concat(e.type,"</div>\n            </div>\n        </div>\n        ");this.cardContainer.innerHTML+=n}},{key:"getList",value:function(e,n){var r=this;e.title===n&&(0==this.vegArray.length?this.vegArray=e.vegIngredients:e.vegIngredients.forEach((function(e){var n=0;r.vegArray.forEach((function(t,i){if(e.includes("(")&&t.includes(e.slice(0,e.indexOf("(")).trim())){var a=t.slice(0,t.indexOf("("));if(t.slice(t.indexOf("(")+1,t.indexOf(")")).includes("g")){var o=Number(t.slice(t.indexOf("(")+1,t.lastIndexOf("g")))+Number(e.slice(e.indexOf("(")+1,e.lastIndexOf("g")));r.vegArray[i]="".concat(a,"(").concat(o,"g)"),n++}else{var c=Number(t.slice(t.indexOf("(")+1,t.indexOf(")")))+Number(e.slice(e.indexOf("(")+1,e.indexOf(")")));r.vegArray[i]="".concat(a,"(").concat(c,")"),n++}}})),r.vegArray.includes(e)||e.includes("(")?e.includes("(")&&0===n&&r.vegArray.push(e):r.vegArray.push(e)})),this.vegList.innerHTML="<h6>Groceries</h6>",this.vegArray.forEach((function(e){if(e){var n='<li class="list-group-item d-flex justify-content-between align-items-center">\n                    <span>'.concat(e,'</span>\n                    <i class="fas fa-trash-alt delete"></i>\n                </li>\n                ');r.vegList.innerHTML+=n}})),0==this.shopArray.length?this.shopArray=e.shopIngredients:e.shopIngredients.forEach((function(e){var n=0;r.shopArray.forEach((function(t,i){if(e.includes("(")&&t.includes(e.slice(0,e.indexOf("(")).trim())){var a=t.slice(0,t.indexOf("("));if(t.slice(t.indexOf("(")+1,t.indexOf(")")).includes("g")){var o=Number(t.slice(t.indexOf("(")+1,t.lastIndexOf("g")))+Number(e.slice(e.indexOf("(")+1,e.lastIndexOf("g")));r.shopArray[i]="".concat(a,"(").concat(o,"g)"),n++}else if(t.slice(t.indexOf("(")+1,t.indexOf(")")).includes("ml")){var c=Number(t.slice(t.indexOf("(")+1,t.lastIndexOf("m")))+Number(e.slice(e.indexOf("(")+1,e.lastIndexOf("m")));r.shopArray[i]="".concat(a,"(").concat(c,"ml)"),n++}else{var s=Number(t.slice(t.indexOf("(")+1,t.indexOf(")")))+Number(e.slice(e.indexOf("(")+1,e.indexOf(")")));r.shopArray[i]="".concat(a,"(").concat(s,")"),n++}}})),r.shopArray.includes(e)||e.includes("(")?e.includes("(")&&0===n&&r.shopArray.push(e):r.shopArray.push(e)})),this.shopList.innerHTML="<h6>Supermarket</h6>",this.shopArray.forEach((function(e){if(e){var n='<li class="list-group-item d-flex justify-content-between align-items-center">\n                    <span>'.concat(e,'</span>\n                    <i class="fas fa-trash-alt delete"></i>\n                </li>\n                ');r.shopList.innerHTML+=n}})),0==this.spiceArray.length?this.spiceArray=e.spiceIngredients:e.spiceIngredients.forEach((function(e){var n=0;r.spiceArray.forEach((function(t,i){if(e.includes("(")&&t.includes(e.slice(0,e.indexOf("(")).trim())){var a=t.slice(0,t.indexOf("(")),o=Number(t.slice(t.indexOf("(")+1,t.indexOf(")")))+Number(e.slice(e.indexOf("(")+1,e.indexOf(")")));r.spiceArray[i]="".concat(a,"(").concat(o,")"),n++}})),r.spiceArray.includes(e)||e.includes("(")?e.includes("(")&&0===n&&r.spiceArray.push(e):r.spiceArray.push(e)})),this.spiceList.innerHTML="<h6>Spices</h6>",this.spiceArray.forEach((function(e){if(e){var n='<li class="list-group-item d-flex justify-content-between align-items-center">\n                    <span>'.concat(e,'</span>\n                    <i class="fas fa-trash-alt delete"></i>\n                </li>\n                ');r.spiceList.innerHTML+=n}})))}},{key:"removeItem",value:function(e,n){console.log(e.textContent.trim(),n),"veg"===n?this.vegArray=this.vegArray.filter((function(n){return n!==e.textContent.trim()})):"shop"===n?this.shopArray=this.shopArray.filter((function(n){return n!==e.textContent.trim()})):"spice"===n&&(this.spiceArray=this.spiceArray.filter((function(n){return n!==e.textContent.trim()}))),e.remove()}}])&&a(n.prototype,r),t&&a(n,t),e}();function c(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var s=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.snackbar=document.createElement("div")}var n,r,t;return n=e,(r=[{key:"init",value:function(){this.snackbar.classList.add("snackbar"),document.querySelector("body").appendChild(this.snackbar)}},{key:"show",value:function(){var e=this;this.snackbar.textContent="scroll down for shopping list",this.snackbar.classList.add("active"),setTimeout((function(){e.snackbar.classList.remove("active")}),4e3)}}])&&c(n.prototype,r),t&&c(n,t),e}(),l=(r(0),document.querySelector(".search-recipes input")),u=document.querySelector(".search-recipes"),f=document.querySelector(".card-container"),d=document.querySelector(".veg"),p=document.querySelector(".shop"),h=document.querySelector(".spice"),v=document.querySelector(".list"),m=function(e){var n=document.querySelectorAll(".recipe-title");Array.from(n).filter((function(n){return!n.textContent.toLowerCase().includes(e)})).forEach((function(e){return e.parentElement.parentElement.classList.add("filtered")})),Array.from(n).filter((function(n){return n.textContent.toLowerCase().includes(e)})).forEach((function(e){return e.parentElement.parentElement.classList.remove("filtered")}))};l.addEventListener("keyup",(function(){var e=l.value.trim().toLowerCase();m(e)})),u.addEventListener("submit",(function(e){e.preventDefault()})),f.addEventListener("click",(function(e){if(e.target.classList.contains("add")){var n=e.target.nextElementSibling.nextElementSibling.children[0].innerText.toLowerCase();g.getRecipes((function(e){return y.getList(e,n)})),b.show(),u.reset();var r=l.value.trim().toLowerCase();m(r)}})),v.addEventListener("click",(function(e){e.target.classList.contains("delete")&&y.removeItem(e.target.parentElement,e.target.parentElement.parentElement.getAttribute("id"))}));var g=new i,y=new o(f,d,p,h),b=new s;b.init(),g.getRecipes((function(e){return y.render(e)}))}]);