// Получаем элементы
const displayItem = document.getElementById('display-input-result');
let currentInput = '';  // Строка для хранения текущего ввода
let operator = '';      // Оператор
let firstValue = '';    // Первое число

const processButtonClick = function(e) {
  const value = e.target.innerText;

  console.log('On click: ' + value);
  console.log(e);

  // Проверяем, если нажата кнопка "C" (очистка)
  if (value === 'C') {
      currentInput = '';
      firstValue = '';
      operator = '';
      updateDisplay('');  // Очищаем дисплей
  } else if (value === '=') {
      // Проверяем выполнение математической операции
      if (operator && firstValue) {
          const result = calculate(firstValue, currentInput, operator);
          updateDisplay(result);
          currentInput = result;
          firstValue = '';
          operator = '';
      }
  } else if (['+', '-', '*', ':', '%'].includes(value)) {
      // Сохраняем первое число и оператора
      operator = value;
      firstValue = currentInput;
      currentInput = '';  // Очищаем текущее значение для ввода второго числа
  } else {
      // Добавляем цифры к текущему вводу
      currentInput += value;
      updateDisplay(currentInput);
  }
}

// Функция для обновления дисплея
function updateDisplay(value) {
  displayItem.value = value;
}

// Обработчик нажатия на кнопки с цифрами
document.querySelectorAll('.btn-calc').forEach(button => {
    button.addEventListener('click', processButtonClick);
});

// Функция для выполнения вычислений
function calculate(first, second, operator) {
    const num1 = parseFloat(first);
    const num2 = parseFloat(second);

    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case ':':
            return num1 / num2;
        case '%':
            return num1 * (num2 / 100);
        default:
            return second;
    }
}
