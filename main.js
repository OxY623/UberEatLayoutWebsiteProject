window.addEventListener('scroll', function () {
    var button = document.getElementById('btn-up');
    if (window.scrollY > 0) {
        button.style.display = 'flex'; /* Показываем кнопку, когда прокручиваем вниз */
    } else {
        button.style.display = 'none'; /* Скрываем кнопку, когда прокрутка вверх */
    }
});