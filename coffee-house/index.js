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

  const progressBar = document.querySelectorAll(".control-progress");
let barIndex = 0;
let interval;

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

const move = function(el, index) {
    let startDate = new Date();
    let endDate = new Date();
    endDate = endDate.setSeconds(endDate.getSeconds() + 5);
    interval = setInterval(() => {
        let currentDate = new Date();
        let leftPercent = Math.trunc((endDate - currentDate) / (endDate - startDate) * 100);
        let passedPercent = +(100 - leftPercent);

        progressBar[index].style.width = passedPercent + '%';
        console.log(leftPercent)
        if(leftPercent == 0) {
            clearInterval(interval);
            progressBar[index].style.width = 0;
        }
    }, 100)
}

const nextSlide = function () {
    clearInterval(interval);
progressBar[controlIndex].style.width = 0;
  if (position < (controls.length - 1) * width.offsetWidth) {
    position += width.offsetWidth;
    controlIndex += 1;
  } else {
    position = 0;
    controlIndex = 0;
  }
  sliderLine.style.left = -position + "px";
  move(progressBar[controlIndex], controlIndex);
};

const prevSlide = function () {
    clearInterval(interval);
progressBar[controlIndex].style.width = 0;
  if (position > 0) {
    position -= width.offsetWidth;
    controlIndex -= 1;
  } else {
    position = (controls.length - 1) * width.offsetWidth;
    controlIndex = controls.length - 1;
  }
  sliderLine.style.left = -position + "px";
  move(progressBar[controlIndex], controlIndex);
};

move(progressBar[currentIndex], currentIndex);

//Автоматическое пролистывание слайдов
let auto = setInterval(nextSlide, 5000);

if (screen.width > 380) {
  //Переключить на следующий слайд
  nextButton.addEventListener("click", () => {
clearInterval(auto);
nextSlide();
auto = setInterval(nextSlide, 5000);
})


  //Переключить на предыдущий слайд
  prevButton.addEventListener("click", () => {
    clearInterval(auto);
    prevSlide();
    auto = setInterval(nextSlide, 5000);
  });
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
 nextSlide();
    }
    // if moved enough positive then snap to previous slide if there is one
    if (movedBy > 100) {
  prevSlide();
    }
  }
}


