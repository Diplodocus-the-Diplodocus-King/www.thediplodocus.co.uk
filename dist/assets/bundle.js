!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r.r(t);var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=document.querySelectorAll(".tooltip")}var t,r,i;return t=e,(r=[{key:"init",value:function(){this.element.forEach((function(e){var t=document.createElement("div");t.classList.add("tip"),t.textContent=e.getAttribute("data-message"),e.appendChild(t),e.addEventListener("mouseenter",(function(){t.classList.add("active")})),e.addEventListener("mouseleave",(function(){t.classList.remove("active")}))}))}}])&&n(t.prototype,r),i&&n(t,i),e}();function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.projects=db.collection("projects"),this.data=new Array,this.projectList=document.querySelector(".project-list"),this.searchBar=document.querySelector(".search"),this.searchForm=document.querySelector(".project-search"),this.previewImg=document.querySelector(".preview-img"),this.projectName=document.querySelector(".project-name"),this.githubLink=document.querySelector(".github-link"),this.webpageLink=document.querySelector(".webpage-link"),this.chipContainer=document.querySelector(".chip-container"),this.projectInfo=document.querySelector(".project-info"),this.next=document.querySelector(".carousel-arrow-next"),this.prev=document.querySelector(".carousel-arrow-prev"),this.dotContainer=document.querySelector(".dot-container"),this.clicked=!1,this.counter=0}var t,r,n;return t=e,(r=[{key:"init",value:function(){var e=this;this.getProjects(),this.searchForm.addEventListener("submit",(function(e){e.preventDefault()})),this.searchBar.addEventListener("keyup",(function(){var t=e.searchBar.value.trim().toLowerCase();e.filterList(t)}))}},{key:"getProjects",value:function(){var e=this;this.projects.onSnapshot((function(t){t.docChanges().forEach((function(t){"added"===t.type&&e.data.push(t.doc.data())})),e.displayList()}))}},{key:"displayList",value:function(){var e=this;this.data.forEach((function(t){e.projectList.innerHTML+='\n                <a href="#" class="btn-large transparent grey-text text-darken-4 project-btn">\n                    <strong>'.concat(t.title,"</strong><br>\n                    (").concat(t.subtitle,")\n                </a>\n            "),e.dotContainer.innerHTML+='<i class="material-icons grey-text text-lighten-4 dot" id="dot-'.concat(t.title.replace(/\s/g,"-"),'">brightness_1</i>')})),this.addListeners()}},{key:"addListeners",value:function(){var e=this,t=this.data[this.counter].title;this.updateDots(t),this.displayProject(t),document.querySelectorAll(".project-btn").forEach((function(t){t.addEventListener("mouseover",(function(t){if(!1===e.clicked){var r=t.target.innerText.slice(0,t.target.innerText.indexOf("(")).trim().toLowerCase();e.displayProject(r)}})),t.addEventListener("click",(function(r){if(r.preventDefault(),!1===e.clicked){t.classList.remove("transparent"),t.classList.add("amber","darken-3","clicked"),e.clicked=!0;var n=r.target.innerText.slice(0,r.target.innerText.indexOf("(")).trim().toLowerCase();e.displayProject(n)}else if(!0===e.clicked&&document.querySelector(".clicked")==t)t.classList.remove("amber","darken-3","clicked"),t.classList.add("transparent"),e.clicked=!1;else if(!0===e.clicked){var i=document.querySelector(".clicked");i.classList.remove("amber","darken-3","clicked"),i.classList.add("transparent"),t.classList.remove("transparent"),t.classList.add("amber","darken-3","clicked");var a=r.target.innerText.slice(0,r.target.innerText.indexOf("(")).trim().toLowerCase();e.displayProject(a)}}))})),this.next.addEventListener("click",(function(){e.counter++,e.counter>e.data.length-1&&(e.counter=0);var t=e.data[e.counter].title;e.updateDots(t),e.displayProject(t)})),this.prev.addEventListener("click",(function(){e.counter--,e.counter<0&&(e.counter=e.data.length-1);var t=e.data[e.counter].title;e.updateDots(t),e.displayProject(t)})),this.dotContainer.addEventListener("click",(function(t){if(t.target.classList.contains("dot")){var r=t.target.getAttribute("id").slice(4,t.target.getAttribute("id").length).replace(/\-/g," ");e.updateDots(r),e.displayProject(r)}}))}},{key:"displayProject",value:function(e){var t=this;this.data.forEach((function(r){if(r.title===e){t.previewImg.setAttribute("src",r.image),t.projectName.innerText=r.title,t.githubLink.setAttribute("href",r.github),t.projectInfo.innerText=r.info,"null"==r.webpage?t.webpageLink.classList.add("disabled"):(t.webpageLink.classList.remove("disabled"),t.webpageLink.setAttribute("href",r.webpage)),t.chipContainer.innerHTML="";var n=["html","blue","css","orange","javascript","yellow","api","green","firebase","red","python","cyan","qt","pink","bootstrap","purple","babel","brown"];r.chips.forEach((function(e){var r=n[n.indexOf(e)+1];t.chipContainer.innerHTML+='<div class="chip z-depth-1 '.concat(r,'">').concat(e,"</div>")}))}}))}},{key:"filterList",value:function(e){var t=this.projectList.querySelectorAll("a");Array.from(t).filter((function(t){return!t.textContent.slice(0,t.textContent.indexOf("(")).toLowerCase().includes(e)})).forEach((function(e){return e.classList.add("filtered")})),Array.from(t).filter((function(t){return t.textContent.slice(0,t.textContent.indexOf("(")).toLowerCase().includes(e)})).forEach((function(e){return e.classList.remove("filtered")}))}},{key:"updateDots",value:function(e){document.querySelectorAll(".dot").forEach((function(t){t.getAttribute("id")==="dot-".concat(e.replace(/\s/g,"-"))?(t.classList.remove("grey-text","text-lighten-4"),t.classList.add("amber-text","text-darken-3")):(t.classList.remove("amber-text","text-darken-3"),t.classList.add("grey-text","text-lighten-4"))}))}}])&&a(t.prototype,r),n&&a(t,n),e}())).init(),(new i).init()}]);