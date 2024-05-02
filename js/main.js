//// слайдер


const images = ['/images/slider1.webp', '/images/slider2.webp', '/images/slider3.webp'];
const titles = ['E2-Engineering', 'E2-consulting', 'E2-information mode ling'];


let currentImageIndex = 0;
const slider = document.querySelector('.slider');

function updateSlider() {
  const title = document.querySelector('h1');
 
  const prevImage = slider.style.backgroundImage;

  slider.classList.remove('fade-in');
  slider.classList.add('fade-out');

  setTimeout(() => {
    slider.style.backgroundImage = `url(${images[currentImageIndex]})`;
    title.innerHTML = titles[currentImageIndex];
   

    slider.classList.remove('fade-out');
    slider.classList.add('fade-in');
  }, 500);

 
}

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

prevButton.addEventListener('click', () => {
 currentImageIndex = (currentImageIndex - 1 < 0) ? images.length - 1 : currentImageIndex - 1;
  console.log(currentImageIndex);
  updateSlider();
});

nextButton.addEventListener('click', () => {
  
 currentImageIndex = (currentImageIndex + 1) % images.length;
  updateSlider();
  console.log(currentImageIndex);
}); 

///// Бургер
let body = document.querySelector('body');
let page = document.querySelector('.sidebar');
let themeButton = document.querySelector('.burger');
let liButton = document.querySelectorAll('.sidebar ul li a');
let mainButton = document.querySelectorAll('.btn');
let clearButton = document.querySelector('.btn_cleared')

themeButton.onclick = function() {
  body.classList.toggle('active')
  page.classList.toggle('active');
  themeButton.classList.toggle('active');
  
};





for (let i = 0; i < liButton.length; i++) {
  liButton[i].onclick = function() {
    if (page.classList.contains('active')) {
      body.classList.remove('active');
      page.classList.remove('active');
      themeButton.classList.remove('active');
    }
  }
};


// Модалки

let modal = document.querySelector('.modal');
let politic = document.querySelector('.politic');
let politicButton = document.querySelectorAll('.politic_btn');
for (let i = 0; i < mainButton.length; i++) {
  mainButton[i].onclick = function() {
  
      modal.classList.add('show');
      
    
  }
};
for (let i = 0; i < politicButton.length; i++) {
  politicButton[i].onclick = function() {
  
      politic.classList.add('show');
      
    
  }
};

modal.addEventListener('click', function(event) {
  if (event.target.classList.contains('modal')) {
    modal.classList.remove('show');
  }

});
clearButton.onclick = function() {
  modal.classList.add('show');
  
};

document.querySelector('.close').onclick = function() {

  modal.classList.remove('show');

};



politic.addEventListener('click', function(event) {
  if (event.target.classList.contains('politic')) {
    politic.classList.remove('show');
  }

});


document.querySelector('.close2').onclick = function() {

  politic.classList.remove('show');

};
/// номер телефона стандарт
document.getElementById('OUSPjaZGxAmU').addEventListener('input', function (e) {
  var x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
  e.target.value = !x[2] ? x[1] : '+' + x[1] + '(' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
});


//// паралакс
const parallax = document.querySelector('.container__info');
const background = document.querySelector('.parallax__background');

window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;
  const distance = `${300 + scrollPosition * -0.2}px`;
  background.style.transform = `translateY(${distance})`;
});



// выбираем все якоря на странице и добавляем обработчик события для клика по ним
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener('click', (event) => {
    // отменяем стандартное поведение ссылки
    event.preventDefault();
    // получаем значение атрибута href для определения целевого элемента
    const targetId = anchor.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    // вычисляем позицию целевого элемента
    const targetPosition = targetElement.offsetTop;
    // вычисляем текущую позицию прокрутки страницы
    const startPosition = window.pageYOffset;
    // вычисляем дистанцию для скролла
    const distance = targetPosition - startPosition;
    // устанавливаем время и количество шагов для скролла
    const duration = 1000;
    const fps = 60;
    const step = distance / (duration / (1000 / fps));
    // запускаем анимацию скролла
    let currentPosition = startPosition;
    let animationFrame = 0;
    function animate() {
      animationFrame = requestAnimationFrame(animate);
      currentPosition += step;
      if (Math.abs(currentPosition - startPosition) >= Math.abs(distance)) {
        currentPosition = startPosition + distance;
        cancelAnimationFrame(animationFrame);
      }
      window.scrollTo(0, currentPosition);
    }
    animate();
  });
}


// прелоадер

            let animationBetween = document.querySelector('.animation-between');
            let animationBetweenItem = document.querySelectorAll('.animation-between__item');
            let wrapper = document.querySelector('.wrapper');
            if (animationBetween) {
                wrapper.style.opacity = "0";
                window.addEventListener('load', function (event) {
                    animationBetween.classList.add('is-active');
                    animationBetweenItem[3].addEventListener("transitionend", function (e) {
                        wrapper.style.opacity = "1";
                    });
                });
            };
