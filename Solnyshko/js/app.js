var clicked = false;
var offset = 50; // Исходное значение смещения

// Обработчик для кликов по ссылкам
$("a[href^='#']").on('click', function(event) {
  clicked = true;
  var hash = this.hash;
  if (hash !== "") {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    $('html, body').animate({
      scrollTop: $(hash).offset().top - offset
    }, 1500);
  }
});

// Функция для анимации прокрутки к якорю
function scrollToHash(hash) {
  if (hash !== "" && !clicked) {
    $('html, body').animate({
      scrollTop: $(hash).offset().top - offset
    }, 1500);
  }
}

// Функция для обработки изменения размера экрана
function handleMediaQuery() {
  if (mq2.matches) {
    offset = 70; // Значение для экранов от 1920px
  } else if (mq1.matches) {
    offset = 60; // Значение для экранов от 1440px до 1919px
  } else if (mq.matches) {
    offset = 50; // Значение для экранов от 1024px до 1439px
  } else if (mq3.matches) {
    offset = 40; // Значение для экранов от 768px до 1023px
  } else {
    offset = 30; // Значение для экранов от 425px до 767px
  }

  // При изменении значения offset перепозиционируем скролл, если был клик
  if (clicked) {
    var hash = window.location.hash;
    scrollToHash(hash);
  }
}

// Создаем объекты для медиа-запросов
var mq = window.matchMedia("(min-width: 1024px)");
var mq1 = window.matchMedia("(min-width: 1440px)");
var mq2 = window.matchMedia("(min-width: 1920px)");
var mq3 = window.matchMedia("(min-width: 768px) and (max-width: 1023px)");

$(window).on('resize', function() {
  console.log('Window resized');
  handleMediaQuery();
});

// Выполняем функцию при изменении размера экрана
mq.addListener(handleMediaQuery);
mq1.addListener(handleMediaQuery);
mq2.addListener(handleMediaQuery);
mq3.addListener(handleMediaQuery);

// Проверяем, есть ли якорь в URL при загрузке страницы и прокручиваем к нему
$(document).ready(function() {
  var hash = window.location.hash;
  scrollToHash(hash);
});


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
