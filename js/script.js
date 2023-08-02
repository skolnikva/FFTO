window.onscroll = function() {
    myFunction();
    myFun();
};

// Шапка главной страница
function myFunction() {
  var header = document.querySelector('.header');
  if (window.pageYOffset > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

// Картинка на главной странице
function myFun() {
  var intro_img = document.querySelector('.intro_img');
  if (window.pageYOffset > 0) {
    intro_img.classList.add('scroll');
  } else {
    intro_img.classList.remove('scroll');
  }
}

//Меню-бургер для главной страницы
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector(".header").classList.toggle("open")
    })
})

// Закрыть меню при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        // Действие при клике
        document.querySelector(".header").classList.remove("open")
    }
});