/**
 * Класс для представления книги.
 * @class
 */
class Book {
    /**
     * Создает экземпляр книги.
     * @param {string} title - Заголовок книги.
     * @param {number} pubYear - Год публикации книги.
     * @param {number} price - Цена книги.
     */
    constructor(title, pubYear, price) {
        let _title;
        Object.defineProperty(this, 'title', {
            /**
             * Геттер для получения заголовка книги.
             * @returns {string} Заголовок книги.
             */
            get: () => _title,
            /**
             * Сеттер для установки заголовка книги.
             * @param {string} value - Новый заголовок.
             * @throws {Error} Если заголовок является пустой строкой.
             */
            set: (value) => {
                if (value === "") {
                    throw new Error("Заголовок не может быть пустым");
                }
                _title = value;
            },
            enumerable: true,
            configurable: true
        });

        // Используем сеттеры для валидации при создании объекта
        this.title = title;
        this.pubYear = pubYear;
        this.#price = price;
    }

    /**
     * Приватное поле для хранения цены.
     * @private
     */
    #price;

    /**
     * Геттер для получения года публикации.
     * @returns {number} Год публикации.
     */
    get pubYear() {
        return this._pubYear;
    }

    /**
     * Сеттер для установки года публикации.
     * @param {number} value - Новый год публикации.
     * @throws {Error} Если год не является положительным числом.
     */
    set pubYear(value) {
        if (value <= 0) {
            throw new Error("Год публикации должен быть положительным числом");
        }
        this._pubYear = value;
    }

    /**
     * Геттер для получения цены книги.
     * @returns {number} Цена книги.
     */
    get price() {
        return this.#price;
    }

    /**
     * Сеттер для установки цены книги.
     * @param {number} value - Новая цена.
     * @throws {Error} Если цена не является положительным числом.
     */
    set price(value) {
        if (value <= 0) {
            throw new Error("Цена должна быть положительным числом");
        }
        this.#price = value;
    }

    /**
     * Выводит в консоль заголовок и цену книги.
     */
    show() {
        console.log(`${this.title}: ${this.#price}`);
    }

    /**
     * Статический метод для сравнения двух книг по году публикации.
     * Используется для сортировки массивов книг.
     * @static
     * @param {Book} a - Первая книга для сравнения.
     * @param {Book} b - Вторая книга для сравнения.
     * @returns {number} Положительное число, если a > b; отрицательное, если a < b; 0, если равны.
     */
    static compare(a, b) {
        return a.pubYear - b.pubYear;
    }
}

/**
 * Проверяет, является ли объект пустым, включая неперечисляемые свойства.
 * Объект считается пустым, если у него нет собственных свойств (как строковых, так и символьных).
 * @param {Object} obj - Объект для проверки.
 * @returns {boolean} Возвращает true, если объект пуст, иначе false.
 */
function isEmpty(obj) {
    return Object.getOwnPropertyNames(obj).length === 0 && Object.getOwnPropertySymbols(obj).length === 0;
}

/**
 * Возвращает количество секунд, прошедших с начала текущего дня (00:00:00).
 * @returns {number} Количество секунд с начала дня.
 */
function getSecondsToday() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const diff = now - today; // Разница в миллисекундах
    return Math.floor(diff / 1000);
}

/**
 * Форматирует объект Date в строку формата "дд.мм.гг".
 * Например, 15 сентября 2006 года -> "15.09.06".
 * @param {Date} date - Объект даты для форматирования.
 * @returns {string} Отформатированная строка даты.
 */
function formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1; // Месяцы с 0 до 11
    let year = date.getFullYear().toString().substr(-2);

    // Добавляем ведущий ноль, если число меньше 10
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    return `${day}.${month}.${year}`;
}
