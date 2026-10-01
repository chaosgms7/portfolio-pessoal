/* Navbar: fundo ao rolar, seção ativa e menu mobile */
(function(){
 var header=document.querySelector(".site-header");
 if(!header)return;
 var btn=header.querySelector(".menu-btn"),nav=header.querySelector("nav");
 var links=[].slice.call(nav.querySelectorAll('a[href^="#"]'));
 var secs=links.map(function(a){return document.getElementById(a.getAttribute("href").slice(1))});
 var queued=false,forced=-1;

 function update(){
  queued=false;
  var y=window.pageYOffset||0;
  header.classList.toggle("is-scrolled",y>8);
  var line=header.offsetHeight+window.innerHeight*0.3,cur=0;
  secs.forEach(function(s,i){if(s&&s.getBoundingClientRect().top<=line)cur=i});
  if(window.innerHeight+y>=document.documentElement.scrollHeight-4)cur=secs.length-1;
  if(forced>=0)cur=forced;
  links.forEach(function(a,i){
   if(i===cur)a.setAttribute("aria-current","location");else a.removeAttribute("aria-current");
  });
 }
 function onScroll(){if(!queued){queued=true;window.requestAnimationFrame(update)}}
 window.addEventListener("scroll",onScroll,{passive:true});
 window.addEventListener("resize",onScroll);
 update();

 function isOpen(){return header.classList.contains("menu-open")}
 function setMenu(open){
  header.classList.toggle("menu-open",open);
  btn.setAttribute("aria-expanded",open?"true":"false");
  btn.setAttribute("aria-label",open?"Fechar menu":"Abrir menu");
 }
 btn.addEventListener("click",function(){setMenu(!isOpen())});
 links.forEach(function(a,i){a.addEventListener("click",function(){forced=i;update();setMenu(false)})});
 ["wheel","touchstart","keydown"].forEach(function(ev){window.addEventListener(ev,function(){if(forced>=0){forced=-1;onScroll()}},{passive:true})});
 document.addEventListener("keydown",function(e){if(e.key==="Escape"&&isOpen()){setMenu(false);btn.focus()}});
 document.addEventListener("click",function(e){if(isOpen()&&!header.contains(e.target))setMenu(false)});
 var mq=window.matchMedia("(max-width:46rem)");
 var closeOnDesktop=function(e){if(!e.matches)setMenu(false)};
 if(mq.addEventListener)mq.addEventListener("change",closeOnDesktop);else mq.addListener(closeOnDesktop);
})();
