const menuBtn = document.querySelector(".burger");
const menu = document.querySelector(".menu-for-burger");
const container = document.querySelector(".main-container");

const toggleMenu = function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
  container.classList.toggle("active");
};

const sliderLine = document.querySelector(".slider-line");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const controls = document.querySelectorAll(".control");
let width = document.querySelector('.slider-wrapper'); 
let position = 0;
let controlIndex = 0;

const slides = Array.from(document.querySelectorAll(".slider-item"));
let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID,
  currentIndex = 0;

const thisIndex = function (index) {
    for (let control of controls) {
      control.classList.remove("active");
    }
    controls[index].classList.add("active");
  };

const nextSlide = function () {
  if (position < (controls.length - 1) * width.offsetWidth) {
    position += width.offsetWidth;
    controlIndex += 1;
  } else {
    position = 0;
    controlIndex = 0;
  }
  sliderLine.style.left = -position + "px";
  thisIndex(controlIndex);
};

const prevSlide = function () {
  if (position > 0) {
    position -= width.offsetWidth;
    controlIndex -= 1;
  } else {
    position = (controls.length - 1) * width.offsetWidth;
    controlIndex = controls.length - 1;
  }
  sliderLine.style.left = -position + "px";
  thisIndex(controlIndex);
};


// Открыть/закрыть бургер меню
menuBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  toggleMenu();
  if (menu.classList.contains("active")) {
    menu.addEventListener("click", function () {
      menu.classList.remove("active");
      menuBtn.classList.remove("active");
      container.classList.remove("active");
    });
  }
});

if (screen.width > 380 ) {
//Переключить на следующий слайд
nextButton.addEventListener("click", nextSlide);

//Переключить на предыдущий слайд
prevButton.addEventListener("click", prevSlide);
}

if (screen.width <= 380) {
    slides.forEach((slide, index) => {
        slide.addEventListener("touchstart", touchStart(index));
        slide.addEventListener("touchend", touchEnd);
        slide.addEventListener("touchmove", touchMove);
      });
    
      function touchStart(index) {
        return function (event) {
          currentIndex = index;
          startPos = event.touches[0].clientX;
          isDragging = true;
        };
      }
      function touchMove(event) {
        if (isDragging) {
          const currentPosition = event.touches[0].clientX;
          currentTranslate = prevTranslate + currentPosition - startPos;
        }
      }
      function touchEnd() {
        isDragging = false;
        console.log(currentIndex);
        const movedBy = currentTranslate - prevTranslate;
        // if moved enough negative then snap to next slide if there is one
        if (movedBy < -100) {
            if (position < (controls.length - 1) * width.offsetWidth) {
                position += width.offsetWidth;
                controlIndex += 1;
              } else {
                position = 0;
                controlIndex = 0;
                currentIndex = 0;
              }
              sliderLine.style.left = -position + "px";
              thisIndex(controlIndex);
        };
        // if moved enough positive then snap to previous slide if there is one
        if (movedBy > 100) {
            if (position > 0) {
                position -= width.offsetWidth;
                controlIndex -= 1;
              } else {
                position = (controls.length - 1) * width.offsetWidth;
                controlIndex = controls.length - 1;
              }
              sliderLine.style.left = -position + "px";
              thisIndex(controlIndex);
        };
      }
}

//Автоматическое пролистывание слайдов 
setInterval(() => {
nextSlide()
}, 5000)
