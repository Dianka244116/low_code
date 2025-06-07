'use strict';
 
// анимация делает  элемент видимым при нажатии
document.querySelectorAll('#manualBlock .manual__item').forEach(item => {
    item.addEventListener('click',() => {
         // Снимаю класс active у всех элементов
         document.querySelectorAll('#manualBlock .manual__item').forEach(element => element.classList.remove('active'));
             // Добавляю active к текущему
               item. classList.add('active');
            });
        });






