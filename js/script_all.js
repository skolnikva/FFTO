window.onscroll = function() {
    myF();
};


// Шапка остальных страниц
function myF() {
  var all_header = document.querySelector('.all_header');
  if (window.pageYOffset > 0) {
    all_header.classList.add('scr');
  } else {
    all_header.classList.remove('scr');
  }
}

//Меню-бургер для остальных страниц
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector(".all_header").classList.toggle("open")
    })
})

// Закрыть меню при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        // Действие при клике
        document.querySelector(".all_header").classList.remove("open")
    }
});