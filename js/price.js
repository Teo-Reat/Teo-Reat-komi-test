let buttonOnePointFiveTon = document.querySelector('.one-point-five-ton');
let slideOnePointFiveTon = document.querySelector('.cars-1-5tonn');
let buttonThreeTon = document.querySelector('.three-ton');
let slideThreeTon = document.querySelector('.cars-3tonn');
let buttonTenTon = document.querySelector('.ten-ton');
let slideTenTon = document.querySelector('.cars-10tonn');
let buttonTwentyTon = document.querySelector('.twenty-ton');
let slideTwentyTon = document.querySelector('.cars-20tonn');
let popupClose = document.querySelector('.popup-close');
let popupWindow = document.querySelector('.popup');
let popupButton = document.querySelector('.submit-your-app');
let firstNavDropdown = document.querySelector('.dropdown-one');
let secondNavDropdown = document.querySelector('.dropdown-two');
let firstDropdownItem = document.querySelector('.dropdown-one-item');
let secondDropdownItem = document.querySelector('.dropdown-two-item');
let feedbackPopupClose = document.querySelector('.feedback-popup-close');
let feedbaackPopupWindow = document.querySelector('.feedback-popup');
let feedbaackButton = document.querySelectorAll('.feedback-button');

//Перебор кнопок обратной связи
let i, button;
for (i = 0; i < feedbaackButton.length; i++) {
    button = feedbaackButton[i];
    button.addEventListener('click', function (event) {
        feedbaackPopupWindow.classList.toggle('hidden-block');
    });
}

//Закрытие всплывающего окна
popupClose.addEventListener('click', function (event) {
    event.preventDefault();
    popupWindow.classList.add('hidden-block');
});

//Закрытие всплывающего окна обратной связи
feedbackPopupClose.addEventListener('click', function (event) {
    event.preventDefault();
    feedbaackPopupWindow.classList.add('hidden-block');
});

//Переключение окна заявки
popupButton.addEventListener('click', function (event) {
    event.preventDefault();
    popupWindow.classList.toggle('hidden-block');
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

//Переключение слайдов с машинами по клику
buttonOnePointFiveTon.addEventListener('click', function (event) {
    event.preventDefault();
    slideOnePointFiveTon.classList.remove('hidden-block');
    buttonOnePointFiveTon.classList.add('car-list-item-active');
    slideThreeTon.classList.add('hidden-block');
    buttonThreeTon.classList.remove('car-list-item-active');
    slideTenTon.classList.add('hidden-block');
    buttonTenTon.classList.remove('car-list-item-active');
    slideTwentyTon.classList.add('hidden-block');
    buttonTwentyTon.classList.remove('car-list-item-active');
});

buttonThreeTon.addEventListener('click', function (event) {
    event.preventDefault();
    slideThreeTon.classList.remove('hidden-block');
    buttonThreeTon.classList.add('car-list-item-active');
    slideOnePointFiveTon.classList.add('hidden-block');
    buttonOnePointFiveTon.classList.remove('car-list-item-active');
    slideTenTon.classList.add('hidden-block');
    buttonTenTon.classList.remove('car-list-item-active');
    slideTwentyTon.classList.add('hidden-block');
    buttonTwentyTon.classList.remove('car-list-item-active');
});

buttonTenTon.addEventListener('click', function (event) {
    event.preventDefault();
    slideTenTon.classList.remove('hidden-block');
    buttonTenTon.classList.add('car-list-item-active');
    slideOnePointFiveTon.classList.add('hidden-block');
    buttonOnePointFiveTon.classList.remove('car-list-item-active');
    slideThreeTon.classList.add('hidden-block');
    buttonThreeTon.classList.remove('car-list-item-active');
    slideTwentyTon.classList.add('hidden-block');
    buttonTwentyTon.classList.remove('car-list-item-active');
});

buttonTwentyTon.addEventListener('click', function (event) {
    event.preventDefault();
    slideTwentyTon.classList.remove('hidden-block');
    buttonTwentyTon.classList.add('car-list-item-active');
    slideOnePointFiveTon.classList.add('hidden-block');
    buttonOnePointFiveTon.classList.remove('car-list-item-active');
    slideThreeTon.classList.add('hidden-block');
    buttonThreeTon.classList.remove('car-list-item-active');
    slideTenTon.classList.add('hidden-block');
    buttonTenTon.classList.remove('car-list-item-active');
});
