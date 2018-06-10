let firstNavDropdown = document.querySelector('.dropdown-one');
let secondNavDropdown = document.querySelector('.dropdown-two');
let firstDropdownItem = document.querySelector('.dropdown-one-item');
let secondDropdownItem = document.querySelector('.dropdown-two-item');
let feedbackPopupClose = document.querySelector('.feedback-popup-close');
let feedbaackPopupWindow = document.querySelector('.feedback-popup');
let feedbaackButton = document.querySelectorAll('.feedback-button');
let allSlides = document.querySelectorAll('.slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 2000);


//Смена слайдов
function nextSlide() {
    allSlides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % allSlides.length;
    allSlides[currentSlide].className = 'slide showing';
}

//Перебор кнопок обратной связи
let i, button;
for (i = 0; i < feedbaackButton.length; i++) {
    button = feedbaackButton[i];
    button.addEventListener('click', function (event) {
        feedbaackPopupWindow.classList.toggle('hidden-block');
    });
}

//Закрытие всплывающего окна обратной связи
feedbackPopupClose.addEventListener('click', function (event) {
    event.preventDefault();
    feedbaackPopupWindow.classList.add('hidden-block');
});

//Выпадающие списки главного меню
firstNavDropdown.addEventListener('mouseover', function (event) {
    event.preventDefault();
    firstDropdownItem.classList.remove('hidden-block');
});

firstNavDropdown.addEventListener('mouseout', function (event) {
    event.preventDefault();
    firstDropdownItem.classList.add('hidden-block');
});

secondNavDropdown.addEventListener('mouseover', function (event) {
    event.preventDefault();
    secondDropdownItem.classList.remove('hidden-block');
});

secondNavDropdown.addEventListener('mouseout', function (event) {
    event.preventDefault();
    secondDropdownItem.classList.add('hidden-block');
});

