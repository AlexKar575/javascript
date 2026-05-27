'use strict';

// --- Функции из предыдущего задания (Задание 2) ---

/**
 * Возвращает x, возведённое в n-ную степень.
 *
 * @param {number} x - Возводимое в степень число.
 * @param {number} n - Степень (целое число).
 * @returns {number} Результат возведения в степень.
 */
export function pow(x, n) {
  if (n === 0) return 1;
  if (n < 0) return 1 / pow(x, -n);
  return x * pow(x, n - 1);
}

/**
 * Возвращает сумму чисел от 1 до n.
 *
 * @param {number} n - Верхняя граница суммы.
 * @returns {number} Сумма чисел от 1 до n.
 */
export function sumTo(n) {
    return (n * (n + 1)) / 2;
}

/**
 * Проверяет год на високосность.
 *
 * @param {number} year - Год для проверки.
 * @returns {boolean} true, если год високосный, иначе false.
 */
export function isLeapYear(year) {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

/**
 * Возвращает факториал числа n! с использованием рекурсии.
 *
 * @param {number} n - Число для вычисления факториала.
 * @returns {bigint} Факториал числа n.
 */
export function factorial(n) {
  if (n <= 1) return 1n; // Условие для n=1 и ниже
  return BigInt(n) * factorial(n - 1);
}

/**
 * Возвращает n-е число Фибоначчи.
 *
 * @param {number} n - Порядковый номер числа.
 * @returns {bigint} n-е число Фибоначчи.
 */
export function fib(n) {
  let a = 0n, b = 1n;
  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return a;
}

/**
 * Создает функцию сравнения с заданным числом.
 *
 * @param {number} x - Эталонное число.
 * @returns {function} Функция для сравнения с x.
 */
export function compare(x) {
  return y => y > x ? true : y < x ? false : null;
}

/**
 * Возвращает сумму всех переданных аргументов.
 *
 * @param {...number} args - Аргументы для суммирования.
 * @returns {number} Сумма аргументов.
 */
export function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}


// --- Новые функции по текущим заданиям ---

/**
 * Возвращает дробную часть числа.
 * Для отрицательных чисел возвращает дополнение до единицы.
 * @param {number} num - Исходное число.
 * @returns {number} Дробная часть.
 */
export function getDecimal(num) {
    const fracPart = Math.abs(num % 1); // Получаем модуль дробной части
    return num >= 0 ? fracPart : 1 - fracPart; // Корректируем для отрицательных чисел
}

/**
 * Нормализует URL, добавляя или заменяя протокол на https://.
 * @param {string} url - Входной URL.
 * @returns {string} Нормализованный URL.
 */
export function normalizeUrl(url) {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        return "https://" + url;
    }
    return url.replace(/^http:\/\//i, "https://");
}

/**
 * Проверяет наличие спама ('viagra', 'xxx') в строке без учёта регистра.
 * @param {string} str - Строка для проверки.
 * @returns {boolean} True, если обнаружен спам.
 */
export function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

/**
 * Усечёт строку до указанной длины, добавив многоточие.
 * @param {string} str - Исходная строка.
 * @param {number} maxlength - Максимальная длина результата.
 * @returns {string} Усечённая строка.
 */
export function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + "…";
    }
    return str;
}

/**
 * Преобразует строку с дефисами в camelCase.
 * Безопасно обрабатывает пустые строки после split().
 * @param {string} str - Строка вида 'my-short-string'.
 * @returns {string} Строка вида 'myShortString'.
 */
export function camelize(str) {
    return str.split('-').map((word, index) => {
        // Если это первое слово или текущее слово пустое, оставляем как есть
        if (index === 0 || word === '') {
            return word;
        }
        // Для остальных слов: первая буква заглавная, остальное как было
        return word[0].toUpperCase() + word.slice(1);
    }).join('');
}

/**
 * Возвращает массив чисел Фибоначчи до n-го элемента.
 * Использует импортированную функцию fib().
 * @param {number} n - Количество элементов в последовательности.
 * @returns {Array<bigint>} Массив чисел Фибоначчи.
 */
export function fibs(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(fib(i));
    }
    return arr;
}

/**
 * Возвращает копию массива, отсортированную по убыванию.
 * Оригинальный массив не изменяется.
 * @param {Array<number>} arr - Входной массив.
 * @returns {Array<number>} Новый отсортированный массив.
 */
export function arrReverseSorted(arr) {
    return arr.slice().sort((a, b) => b - a);
}

/**
 * Возвращает массив уникальных значений из исходного массива.
 * @template T
 * @param {Array<T>} arr - Входной массив.
 * @returns {Array<T>} Массив уникальных значений.
 */
export function unique(arr) {
    return [...new Set(arr)];
}
