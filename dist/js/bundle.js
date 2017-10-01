!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t,n){"use strict";function i(e,t){e.classList.add(t)}function o(e,t){e.classList.remove(t)}e.exports={addClass:i,removeClass:o}},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(t,n){i(this,e),this.trigger=t,this.options=n,this.open=!1,n.event&&this.loadTriggerEvent()}return e.prototype.loadTriggerEvent=function(){var e=this;this.trigger.addEventListener(this.options.event,function(t){t.preventDefault(),e.render()})},e.prototype.loadPostEvents=function(){var e=this,t=document.querySelector(".overlay"),n=document.querySelector(".btn-ok");t.addEventListener("click",function(){return e.destroy()}),n.addEventListener("click",function(){return e.destroy()})},e.prototype.create=function(e){return'\n      <div class="overlay"></div>\n      <div class="modal">\n        <h2 class="title '+e.headerClass+" "+e.iconClass+'">'+e.title+'</h2>\n        <p class="message">'+e.message+'</p>\n        <button class="btn-ok">'+e.button+"</button>\n      </div>\n    "},e.prototype.destroy=function(){var e=document.querySelector(".overlay"),t=document.querySelector(".modal");e.remove(),t.remove(),this.open=!1},e.prototype.render=function(){if(this.open)return!1;var e=this.create(this.options);document.body.insertAdjacentHTML("beforeend",e),this.open=!0,this.loadPostEvents()},e}();e.exports=o},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(){i(this,e)}return e.name=function(e){return e.length>=3},e.email=function(e){return/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(e)},e.tel=function(e){return/^(\(?[0-9]{2}\)?)\s?([9]{1})?([0-9]{4})-?([0-9]{4})$/.test(e)},e.info=function(e){return e.length>=4},e}();e.exports=o},function(e,t,n){"use strict";function i(e){e.classList.contains("-hide")?(e.classList.remove("-hide"),e.classList.add("-show")):(e.classList.remove("-show"),e.classList.add("-hide"))}e.exports=i},function(e,t,n){n(0),n(3),n(1),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(13),n(14),n(15),e.exports=n(2)},function(e,t,n){"use strict";var i=n(0).addClass,o=n(0).removeClass;!function(){var e=document.querySelector(".page-header"),t=document.querySelector(".main-box"),n=e.querySelector(".item.button"),s=e.offsetHeight,r=t.offsetHeight,a=0;window.addEventListener("scroll",function(){setTimeout(function(){a=window.scrollY,a>r-s?(i(e,"-shadow"),i(e,"home"),i(n,"-show")):(o(e,"-shadow"),o(e,"home"),o(n,"-show"))},50)})}()},function(e,t,n){"use strict";!function(){document.body.offsetWidth>800||document.querySelectorAll(".collapse").forEach(function(e){console.log("adicionou eventos");var t=e.querySelector(".subtitle");t.classList.add("collapsed"),t.parentNode.querySelector(".description").classList.add("collapsed"),t.addEventListener("click",function(){console.log("clicou"),this.classList.toggle("collapsed"),this.parentNode.querySelector(".description").classList.toggle("collapsed")})})}()},function(e,t,n){"use strict";var i=n(0).addClass,o=n(0).removeClass,s=n(1),r=n(2);!function(){var e=void 0,t=document.querySelector("#cotacao");if(t){var n=t.querySelector("#name"),a=t.querySelector("#email"),c=t.querySelector("#tel"),l=t.querySelector("#contact"),u=t.querySelector("#period"),d=t.querySelector("#insurance"),f={iconClass:"icon",title:"Pedido de cotação enviado",button:"Ok, entendi!"},h=new s(t,f);n.addEventListener("blur",function(){return e=this.value,f.message="Obrigado "+e+", vamos entrar em contato em breve e solicitaremos mais algumas informações para te enviar as opções de seguro.",r.name(this.value)?o(this,"error"):i(this,"error")}),a.addEventListener("blur",function(){return r.email(this.value)?o(this,"error"):i(this,"error")}),c.addEventListener("blur",function(){return r.tel(this.value)?o(this,"error"):i(this,"error")}),t.addEventListener("submit",function(e){e.preventDefault();var t=r.name(n.value),i=r.email(a.value),o=r.tel(c.value);if(!t||!i||!o)return!1;var s="message=Nome: "+n.value+"\n      Telefone: "+c.value+"\n      E-mail: "+a.value+"\n      Opção de contato: "+l.options[l.selectedIndex].text+"\n      Período: "+u.options[u.selectedIndex].text+"\n      Tipo de seguro: "+d.options[d.selectedIndex].text,f=new XMLHttpRequest;f.open("POST","https://formspree.io/teokfigueiredo@gmail.com",!0),f.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),f.setRequestHeader("Accept","application/json"),f.send(s),h.render()})}}()},function(e,t,n){"use strict";var i=n(0).addClass,o=n(0).removeClass,s=n(1),r=n(2);!function(){var e=document.querySelector("#fale");if(e){var t=e.querySelector("#name"),n=e.querySelector("#email"),a=e.querySelector("#tel"),c=e.querySelector("#info"),l=e.querySelector("#contact"),u=e.querySelector("#period"),d={iconClass:"icon",title:"Obrigado pela mensagem",message:"Em breve entraremos em contato :)",button:"Ok, entendi!"},f=new s(e,d);t.addEventListener("blur",function(){return r.name(this.value)?o(this,"error"):i(this,"error")}),n.addEventListener("blur",function(){return r.email(this.value)?o(this,"error"):i(this,"error")}),a.addEventListener("blur",function(){return r.tel(this.value)?o(this,"error"):i(this,"error")}),c.addEventListener("blur",function(){return r.info(this.value)?o(this,"error"):i(this,"error")}),e.addEventListener("submit",function(e){e.preventDefault();var i=r.name(t.value),o=r.email(n.value),s=r.tel(a.value),d=r.info(c.value);if(!(i&&o&&s&&d))return!1;var h="message=Nome: "+t.value+"\n      Telefone: "+a.value+"\n      E-mail: "+n.value+"\n      Opção de contato: "+l.options[l.selectedIndex].text+"\n      Período: "+u.options[u.selectedIndex].text+"\n      Mensagem: "+c.value,m=new XMLHttpRequest;m.open("POST","https://formspree.io/teokfigueiredo@gmail.com",!0),m.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),m.setRequestHeader("Accept","application/json"),m.send(h),f.render()})}}()},function(e,t,n){"use strict";var i=n(3);!function(){var e=(document.body,document.querySelector(".hamburguer")),t=document.querySelector(".menu");e.addEventListener("click",function(){var e=this.querySelector(".hamburguericon use");i(t),e.getAttributeNS("http://www.w3.org/1999/xlink","href").indexOf("hamburguer")>0?this.querySelector(".hamburguericon use").setAttributeNS("http://www.w3.org/1999/xlink","href","/img/icons.svg#close"):this.querySelector(".hamburguericon use").setAttributeNS("http://www.w3.org/1999/xlink","href","/img/icons.svg#hamburguer")})}()},function(e,t,n){"use strict";var i=n(1);!function(){var e=document.querySelectorAll(".fipe"),t={headerClass:"header",event:"click",title:"O que é Tabela Fipe?",message:"A Fundação Instituto de Pesquisa Econômica (FIPE) elabora por meio de pesquisas mensais uma tabela de referência com preços médios dos veículos no mercado nacional.",button:"Ok, entendi!"};e&&e.forEach(function(e){return new i(e,t)})}()},function(e,t,n){"use strict";var i=n(1);!function(){var e=document.querySelectorAll(".franquia"),t={headerClass:"header",event:"click",title:"O que é Franquia?",message:"Em caso de sinistro, se não houver indenização integral, o segurado fica responsável por pagar apenas a franquia e a seguradora o restante do reparo.",button:"Ok, entendi!"};e&&e.forEach(function(e){return new i(e,t)})}()},function(e,t,n){"use strict";var i=n(1);!function(){var e=document.querySelectorAll(".perda"),t={headerClass:"header",event:"click",title:"O que é Perda total?",message:"É considerado perda total se após uma colisão o reparo do veículo segurado ultrapassar 75% de seu valor na tabela FIPE.",button:"Ok, entendi!"};e&&e.forEach(function(e){return new i(e,t)})}()},function(e,t,n){"use strict";var i=n(1);!function(){var e=document.querySelectorAll(".sinistro"),t={headerClass:"header",event:"click",title:"O que é Sinistro?",message:"É o evento em que o bem segurado sofre acidente ou prejuízo material.",button:"Ok, entendi!"};e&&e.forEach(function(e){return new i(e,t)})}()},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(t,n){i(this,e),this.elements={sliderContainer:t,sliderBulletsContainer:n,slides:t.querySelector(".slides"),slide:t.querySelectorAll(".slide")},this.config={currentPosition:0,currentSlide:0,finalPosition:0,initPosition:0,mouseDown:!1,previousPosition:0,slideWidth:0,slideQuantity:0,isMobile:!1}}return e.prototype.init=function(){this.isMobile(),this.initialMsTranslate(200),this.setSlidesConfiguration(),this.createBullets(this.elements.slide.length),this.setActiveSlide(this.config.currentSlide),this.changeByBullet(),this.loadEvents()},e.prototype.initialMsTranslate=function(e){this.elements.slides.style.transitionDuration=e+"ms"},e.prototype.setSlidesConfiguration=function(){var e=window.getComputedStyle(this.elements.slide[1]);this.config.slideWidth=this.elements.slide[1].offsetWidth+parseInt(e.marginLeft),this.config.slideQuantity=this.elements.slide.length},e.prototype.setActiveSlide=function(e){this.elements.bullet.forEach(function(e){return e.classList.remove("active")}),this.elements.bullet[e].classList.add("active"),this.elements.slide.forEach(function(e){return e.classList.remove("active")}),this.elements.slide[e].classList.add("active")},e.prototype.loadEvents=function(){var e=this;this.elements.slide.forEach(function(t){t.addEventListener("mousedown",e.start.bind(e)),t.addEventListener("mousemove",e.move.bind(e)),t.addEventListener("mouseup",e.end.bind(e)),t.addEventListener("touchstart",e.start.bind(e)),t.addEventListener("touchmove",e.move.bind(e)),t.addEventListener("touchend",e.end.bind(e))}),window.addEventListener("resize",function(){e.setSlidesConfiguration(),e.initialMsTranslate(0),e.translate(-e.config.slideWidth*e.config.currentSlide)})},e.prototype.start=function(e){var t=e.touches||e,n=t[0]?t[0].pageX:t.pageX;this.config.mouseDown=!0,this.config.initPosition=n,this.config.previousPosition=this.config.currentPosition,this.initialMsTranslate(0)},e.prototype.move=function(e){if(!this.config.mouseDown)return!1;var t=e.touches||e,n=t[0]?t[0].pageX:t.pageX;this.config.finalPosition=n-this.config.initPosition,this.config.finalPosition+=this.config.currentPosition,this.elements.slides.style.transform="translate3d("+this.config.finalPosition+"px, 0, 0)"},e.prototype.end=function(e){this.config.mouseDown=!1,this.initialMsTranslate(200),this.config.finalPosition>this.config.previousPosition?this.moveBackward():this.config.finalPosition<this.config.previousPosition&&this.moveForward()},e.prototype.moveBackward=function(){if(0===this.config.currentSlide)return this.translate(this.config.currentPosition);this.config.currentPosition+=this.config.slideWidth,--this.config.currentSlide,this.setActiveSlide(this.config.currentSlide),this.translate(this.config.currentPosition)},e.prototype.moveForward=function(){return this.config.isMobile||this.config.currentSlide!==this.config.slideQuantity-2?this.config.isMobile&&this.config.currentSlide===this.config.slideQuantity-1?this.translate(this.config.currentPosition):(this.config.currentPosition+=-this.config.slideWidth,++this.config.currentSlide,this.setActiveSlide(this.config.currentSlide),void this.translate(this.config.currentPosition)):this.translate(this.config.currentPosition)},e.prototype.createBullets=function(e){if(this.config.isMobile)for(var t=0;t<e;t++){var n=document.createElement("span");n.classList.add("bullet"),this.elements.sliderBulletsContainer.appendChild(n)}if(!this.config.isMobile)for(var i=0;i<e-1;i++){var o=document.createElement("span");o.classList.add("bullet"),this.elements.sliderBulletsContainer.appendChild(o)}this.elements.bullet=document.querySelectorAll(".bullet")},e.prototype.changeByBullet=function(){var e=this;this.elements.bullet.forEach(function(t,n){t.addEventListener("click",function(){e.setActiveSlide(n),e.translate(-e.config.slideWidth*n),e.config.currentSlide=n})})},e.prototype.translate=function(e){this.elements.slides.style.transform="translate3d("+e+"px, 0, 0)",this.config.currentPosition=e},e.prototype.isMobile=function(){return document.body.offsetWidth<800?this.config.isMobile=!0:this.config.isMobile=!1},e}();window.onload=function(){var e=document.querySelector(".slider-container"),t=document.querySelector(".bullets");if(e){new o(e,t).init()}}},function(e,t,n){"use strict";!function(){var e=document.querySelectorAll(".testimonial");if(document.body.offsetWidth<800&&e.length){var t=e[0].offsetHeight,n=document.querySelector("#moreTestimonial");e.forEach(function(e){e.style.height=0,e.style.marginBottom=0}),e[0].style.height=t+"px",e[0].style.marginBottom="20px",n.addEventListener("click",function(n){n.preventDefault(),e.forEach(function(e){e.style.height=t+"px",e.style.marginBottom="20px"}),this.classList.add("hidden")}),window.addEventListener("resize",function(){setTimeout(function(){document.body.offsetWidth>800&&e.forEach(function(e){e.style.height="",e.style.marginBottom=""})},200)})}}()}]);