"use strict";var sidebar=document.getElementById("sidebar"),main=document.getElementById("main"),toggleMenu=document.getElementById("toggle-menu"),move=document.querySelector(".topbar-marvel");function _createForOfIteratorHelper(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,t=function(){};return{s:t,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){l=!0,a=e},f:function(){try{o||null==r.return||r.return()}finally{if(l)throw a}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(r="Object"===r&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}main.addEventListener("click",function(e){"toggle-menu"!=e.target.id&&"toggle-menu"!=e.target.parentElement.id||(console.log("tocaste el toggle"),sidebar.classList.toggle("active"),main.classList.toggle("active"),toggleMenu.classList.toggle("show"),move.classList.toggle("move"))});var select=document.getElementById("select"),form=document.getElementById("form");form.addEventListener("change",function(e){"male"==e.target.value?getData("Hombre"):"female"==e.target.value?getData("Mujer"):getData("All")});var getData=function(d){form.addEventListener("submit",function(e){e.preventDefault(),axios({method:"GET",url:"db/data.json"}).then(function(e){var t,r=document.createDocumentFragment(),n=document.getElementById("container"),a=_createForOfIteratorHelper(e.data[1].data);try{for(a.s();!(t=a.n()).done;){var o,l,i,c,u=t.value;d===u.Gender&&u.Gender===d?(console.log(e.data[1].data),(o=document.createElement("DIV")).classList.add("grid-container__item"),(l=document.createElement("IMG")).setAttribute("src",u.Img),o.appendChild(l),r.appendChild(o)):"All"===d&&((i=document.createElement("DIV")).classList.add("grid-container__item"),(c=document.createElement("IMG")).setAttribute("src",u.Img),i.appendChild(c),r.appendChild(i))}}catch(e){a.e(e)}finally{a.f()}n.appendChild(r)}).catch(function(e){return console.log(e)})})};