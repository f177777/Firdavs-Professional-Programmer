const menu = document.querySelector(".header__menu");
const nav = document.querySelector(".header__nav");

function handleClick (){
if(nav.classList.contains("close")){
  nav.classList.remove("close");
  nav.classList.add("open")
}else{
    nav.classList.remove("open");
    nav.classList.add("close");
}

if(menu.classList.contains("fa-bars")){
    menu.classList.remove("fa-bars");
    menu.classList.add("fa-xmark")
  }else{
      menu.classList.remove("fa-xmark");
      menu.classList.add("fa-bars");
  }

}
menu.addEventListener("click", handleClick);