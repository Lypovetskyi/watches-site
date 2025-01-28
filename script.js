// Получаем элементы
const rangeInput = document.getElementById('volume');
const priceDisplay = document.querySelector('.price-display');

// Обновляем значение цены при изменении ползунка
rangeInput.addEventListener('input', () => {
  priceDisplay.textContent = rangeInput.value; // Устанавливаем текущее значение
});

// Обновляем цену при прокрутке страницы
window.addEventListener('scroll', () => {
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const scrollPercentage = window.scrollY / maxScroll; // Прогресс прокрутки в %
  const price = Math.round(scrollPercentage * rangeInput.max);
  priceDisplay.textContent = price;
  rangeInput.value = price; // Синхронизируем значение ползунка
});

// Получаем элемент для сброса чекбоксов
const resetButton = document.querySelector('.about-reset');

// Получаем все чекбоксы
const checkboxes = document.querySelectorAll('.checkbox-list input[type="checkbox"]');

// Добавляем обработчик события клика на кнопку сброса
resetButton.addEventListener('click', () => {
  // Проходим по всем чекбоксам и снимаем с них галочки
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
  });
});
