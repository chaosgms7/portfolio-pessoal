/* Alternância de tema (claro/escuro) com transição suave e persistência em localStorage */
(function(){
 var root=document.documentElement,btn=document.querySelector(".theme-toggle"),timer;
 function current(){return root.getAttribute("data-theme")==="claro"?"claro":"escuro"}
 function sync(){
  var t=current();
  root.setAttribute("data-theme",t);
  if(!btn)return;
  var msg=t==="claro"?"Tema claro ativo. Mudar para escuro":"Tema escuro ativo. Mudar para claro";
  btn.setAttribute("aria-label",msg);btn.title=msg;
 }
 sync();
 if(btn)btn.addEventListener("click",function(){
  var next=current()==="claro"?"escuro":"claro";
  root.classList.add("theme-anim");
  clearTimeout(timer);timer=setTimeout(function(){root.classList.remove("theme-anim")},450);
  root.setAttribute("data-theme",next);sync();
  try{localStorage.setItem("tema",next)}catch(e){}
 });
})();
