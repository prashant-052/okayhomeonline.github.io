burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList= document.querySelector('.navList')

burger.addEventListener('click', ()=>{
   // navbar.classList.toggle('h-nav-resp'); 
   navList.classList.toggle('v-class-resp');
   // navList.classList.toggle('side-nav-resp');
})