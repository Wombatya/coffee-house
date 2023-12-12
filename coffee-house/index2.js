let menuBtn = document.querySelector('.burger');
let menu = document.querySelector('.menu-for-burger');
let container = document.querySelector('.main-container');

let toggleMenu = function(){
    menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
    container.classList.toggle('active');
}


// Открыть/закрыть бургер меню
menuBtn.addEventListener('click', function(event) {
    event.stopPropagation();
toggleMenu();
    if (menu.classList.contains('active')) {
        menu.addEventListener('click', function() {
   menu.classList.remove('active');
   menuBtn.classList.remove('active');
   container.classList.remove('active');
})
        }
}  
);
