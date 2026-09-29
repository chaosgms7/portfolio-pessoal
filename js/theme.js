/* Alternância de tema (claro/escuro) com persistência em localStorage */
(function(){
 var root=document.documentElement,btns=document.querySelectorAll(".theme button");
 function set(t){root.setAttribute("data-theme",t);btns.forEach(function(b){b.setAttribute("aria-pressed",b.dataset.t===t)})}
 var saved=null;try{saved=localStorage.getItem("tema")}catch(e){}
 if(saved)set(saved);else btns.forEach(function(b){b.setAttribute("aria-pressed","false")});
 btns.forEach(function(b){b.addEventListener("click",function(){set(b.dataset.t);try{localStorage.setItem("tema",b.dataset.t)}catch(e){}})});
})();
